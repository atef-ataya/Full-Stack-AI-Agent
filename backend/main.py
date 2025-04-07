from fastapi import FastAPI, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List
import os
import json
import shutil
import uuid
import datetime
from pdf_crew import run_pdf_assistant

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.post("/upload")
async def upload_files(files: List[UploadFile] = File(...)):
    """
    Upload multiple PDF files to the server
    """
    uploaded_files = []
    
    os.makedirs("./knowledge/uploaded_pdfs", exist_ok=True)
    for index, file in enumerate(files):
        if not file.filename.lower().endswith('.pdf'):
            return JSONResponse(
                status_code=400, 
                content={"error": f"File {file.filename} is not a PDF"}
            )
        
        file_path = os.path.join("./knowledge/uploaded_pdfs", file.filename)

        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        uploaded_files.append({
            "filename": file.filename,
            "size": os.path.getsize(file_path),
            "index": index
        })
    
    return {"uploadedFiles": uploaded_files}

@app.post("/query")
async def handle_query(input: dict):
    try:
        query = input.get("query", "")
        result = run_pdf_assistant(query) 
        result_str = str(result)

        return JSONResponse({
            "generateCopilotResponse": {
                "messages": [
                    {"content": result_str}
                ]
            }
        })

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
@app.get("/list-pdfs")
async def list_pdfs():
    """
    List all PDF files in the uploaded_pdfs directory
    """
    pdf_files = []
    try:
        pdf_directory = "uploaded_pdfs"
        full_path = os.path.join("knowledge", pdf_directory)
        
        if os.path.exists(full_path):
            for filename in os.listdir(full_path):
                if filename.lower().endswith('.pdf'):
                    file_path = os.path.join(full_path, filename)
                    pdf_files.append({
                        "filename": filename,
                        "size": os.path.getsize(file_path)
                    })
        
        return {"files": pdf_files}
    
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": f"Error listing PDFs: {str(e)}"}
        )
        

import uuid
import datetime
import json
import functools
import time

message_cache = {}
agent_states = {}

@app.post("/copilot-compatible")
async def handle_copilot_query(request: Request):
    try:
        body = await request.json()
        print("Received request body:", body)
        
        operation_name = body.get("operationName", "")
        
        if operation_name == "availableAgents":
            return JSONResponse({
                "data": {
                    "availableAgents": {
                        "agents": [
                            {
                                "name": "MyCopilotCrew",
                                "id": "MyCopilotCrew",
                                "description": "A CrewAI agent that can analyze PDF documents"
                            }
                        ]
                    }
                }
            })
        
        elif operation_name == "loadAgentState":
            variables = body.get("variables", {})
            data = variables.get("data", {})
            agent_name = data.get("agentName", "")
            thread_id = data.get("threadId", "")
            
            if thread_id not in agent_states:
                agent_states[thread_id] = {
                    "inputs": {},
                    "result": "Crew result will appear here..."
                }
            
            return JSONResponse({
                "data": {
                    "loadAgentState": {
                        "threadId": thread_id,
                        "threadExists": True,
                        "state": json.dumps(agent_states[thread_id]),
                        "messages": []
                    }
                }
            })
        
        elif operation_name == "generateCopilotResponse":
            variables = body.get("variables", {})
            data = variables.get("data", {})
            thread_id = data.get("threadId", "")
            messages = data.get("messages", [])
            agent_states_data = data.get("agentStates", [])
            
            user_message = None
            parent_id = None
            for msg in messages:
                if "textMessage" in msg:
                    text_message = msg.get("textMessage", {})
                    if text_message.get("role") == "user":
                        user_message = text_message.get("content", "")
                        parent_id = msg.get("id")
                        break
            
            if not user_message:
                for msg in messages:
                    if "textMessage" in msg:
                        text_message = msg.get("textMessage", {})
                        if text_message.get("role") in ["developer", "assistant"]:
                            user_message = text_message.get("content", "")
                            parent_id = msg.get("id")
                            break
            
            if not user_message or "provide your inputs" in user_message.lower():
                user_message = "Summarize the PDF documents"
            
            cache_key = user_message
            
            current_time = time.time()
            if cache_key in message_cache:
                cached_time, cached_result = message_cache[cache_key]
                if current_time - cached_time < 30:
                    print(f"Using cached result for: {user_message}")
                    crew_result = cached_result
                else:
                    crew_result = run_pdf_assistant(user_message)
                    message_cache[cache_key] = (current_time, crew_result)
            else:
                crew_result = run_pdf_assistant(user_message)
                message_cache[cache_key] = (current_time, crew_result)
            
            agent_states[thread_id] = {
                "inputs": {"query": user_message},
                "result": str(crew_result)
            }
            
            message_id = f"msg_{uuid.uuid4()}"
            
            return JSONResponse({
                "data": {
                    "generateCopilotResponse": {
                        "threadId": thread_id,
                        "runId": f"run_{uuid.uuid4()}",
                        "messages": [
                            {
                                "__typename": "TextMessageOutput",
                                "id": message_id,
                                "createdAt": datetime.datetime.now().isoformat(),
                                "content": [str(crew_result)],
                                "role": "assistant",
                                "parentMessageId": parent_id
                            },
                            {
                                "__typename": "AgentStateMessageOutput",
                                "id": f"state_{uuid.uuid4()}",
                                "createdAt": datetime.datetime.now().isoformat(),
                                "threadId": thread_id,
                                "state": json.dumps(agent_states[thread_id]),
                                "running": False,
                                "agentName": "MyCopilotCrew",
                                "nodeName": "MyCopilotCrew",
                                "runId": f"run_{uuid.uuid4()}",
                                "active": True,
                                "role": "assistant"
                            }
                        ]
                    }
                }
            })
        
        return JSONResponse({
            "errors": [{"message": f"Unsupported operation: {operation_name}"}]
        }, status_code=400)
        
    except Exception as e:
        print(f"Error in copilot-compatible endpoint: {str(e)}")
        import traceback
        traceback.print_exc()
        return JSONResponse({
            "errors": [{"message": str(e)}]
        }, status_code=500)
        
@app.post("/debug-request")
async def debug_request(request: Request):
    try:
        body = await request.json()
        print("Debug endpoint received:", body)
        return JSONResponse({
            "received": body,
            "message": "Request received successfully"
        })
    except Exception as e:
        print(f"Error in debug endpoint: {str(e)}")
        return JSONResponse({
            "error": str(e)
        }, status_code=500)