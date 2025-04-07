import os
import logging
from crewai import Agent, Task, Crew, Process, LLM
from crewai.knowledge.source.pdf_knowledge_source import PDFKnowledgeSource

from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def run_pdf_assistant(question: str) -> str:
    """
    Process a question about PDFs using CrewAI with OpenAI
    """
    try:
        pdf_directory = "uploaded_pdfs"
        
        pdf_files = [
            os.path.join(pdf_directory, f) 
            for f in os.listdir(os.path.join("knowledge", pdf_directory)) 
            if f.lower().endswith('.pdf')
        ]
        
        if not pdf_files:
            return "No PDF files found. Please upload PDFs first."
        
        logger.info(f"Found PDF files: {pdf_files}")
        
        pdf_source = PDFKnowledgeSource(
            file_paths=pdf_files,
            chunk_size=4000,
            chunk_overlap=200
        )
        
        llm = LLM(
            model="gpt-4o",  
            temperature=0.0,
            api_key=os.getenv("OPENAI_API_KEY") )

        pdf_agent = Agent(
            role="PDF Assistant",
            goal=(
                "You have PDF files to analyze. "
                "Answer questions based on their content accurately and comprehensively."
            ),
            backstory="Expert at reading and synthesizing PDF documents with deep analytical skills.",
            llm=llm,
            verbose=True,
            allow_delegation=False,
            knowledge_sources=[pdf_source]
        )

        cleaned_question = question.replace("{", "{{").replace("}", "}}")
        description_text = "Carefully analyze the PDFs and answer this question: " + cleaned_question
        pdf_task = Task(
            description=description_text,
            expected_output="A detailed, comprehensive answer drawing directly from the PDF content",
            agent=pdf_agent
        )

        crew = Crew(
            agents=[pdf_agent],
            tasks=[pdf_task],
            verbose=True,
            process=Process.sequential
        )

        result = crew.kickoff(inputs={"user_question": question})
        
        logger.info("PDF analysis completed successfully")
        return result
    
    except Exception as e:
        logger.error(f"Error in PDF assistant: {str(e)}")
        return f"An error occurred while processing your query: {str(e)}"