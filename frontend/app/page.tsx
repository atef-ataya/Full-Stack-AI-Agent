'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CopilotTextarea } from '@copilotkit/react-textarea';
import { FileText, Send, Book, Search, Upload } from 'lucide-react';

const initialSharedState = {
  documents: [],
};

export default function PDFAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [sharedState, setSharedState] = useState(initialSharedState);
  const [uploading, setUploading] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const fetchExistingPDFs = async () => {
      try {
        const response = await fetch('http://localhost:8000/list-pdfs');
        if (!response.ok) {
          throw new Error('Failed to fetch PDFs');
        }

        const data = await response.json();

        if (data.files && data.files.length > 0) {
          setSharedState((prev) => ({
            ...prev,
            documents: data.files.map((file, index) => ({
              id: `doc${index + 1}`,
              name: file.filename,
              size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
              selected: false,
            })),
          }));
        }
      } catch (error) {
        console.error('Error fetching existing PDFs:', error);
      }
    };

    fetchExistingPDFs();
  }, []);

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      const data = await response.json();
      setSharedState((prev) => ({
        ...prev,
        documents: [
          ...prev.documents,
          ...data.uploadedFiles.map((file) => ({
            id: `doc${prev.documents.length + file.index + 1}`,
            name: file.filename,
            size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
            selected: false,
          })),
        ],
      }));
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });
      const data = await res.json();

      // Add response to chat
      if (data.generateCopilotResponse?.messages?.length > 0) {
        const assistantMessage = {
          role: 'assistant',
          content: data.generateCopilotResponse.messages[0].content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: `Error: ${data.error}` },
        ]);
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, there was an error processing your request: ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const selectPdf = (pdf) => {
    setSelectedFile(pdf);
    setSharedState((prev) => ({
      ...prev,
      documents: prev.documents.map((d) => ({
        ...d,
        selected: d.id === pdf.id,
      })),
    }));
  };

  return (
    <>
      <div style={{ display: 'flex', height: '100vh', background: 'white' }}>
        {showSidebar && (
          <div
            style={{
              width: '300px',
              backgroundColor: 'white',
              borderRight: '1px solid #e5e7eb',
              overflow: 'auto',
              padding: '16px',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px',
                  color: '#1f2937',
                }}
              >
                <Book
                  style={{ marginRight: '8px', color: '#2563eb' }}
                  size={20}
                />
                Documents
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  marginBottom: '16px',
                  borderRadius: '4px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Search
                  style={{ marginRight: '8px', color: '#9ca3af' }}
                  size={18}
                />
                <input
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    color: '#4b5563',
                  }}
                  placeholder="Search documents..."
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                {sharedState.documents.map((pdf) => (
                  <div
                    key={pdf.id}
                    onClick={() => selectPdf(pdf)}
                    style={{
                      padding: '12px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      marginBottom: '8px',
                      backgroundColor:
                        selectedFile?.id === pdf.id ? '#eff6ff' : 'white',
                      border:
                        selectedFile?.id === pdf.id
                          ? '1px solid #bfdbfe'
                          : '1px solid transparent',
                      boxShadow:
                        selectedFile?.id === pdf.id
                          ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                          : 'none',
                    }}
                  >
                    <FileText
                      style={{
                        marginRight: '12px',
                        color:
                          selectedFile?.id === pdf.id ? '#2563eb' : '#6b7280',
                      }}
                      size={20}
                    />
                    <div>
                      <div style={{ fontWeight: '500', color: '#374151' }}>
                        {pdf.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        {pdf.size}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  ref={fileInputRef}
                  style={{
                    display: 'none',
                  }}
                  onChange={handleFileUpload}
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '12px',
                    borderRadius: '4px',
                    backgroundColor: uploading ? '#e5e7eb' : 'white',
                    border: '1px solid #e5e7eb',
                    color: '#4b5563',
                    fontWeight: '500',
                    cursor: uploading ? 'not-allowed' : 'pointer',
                  }}
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <svg
                        style={{
                          marginRight: '8px',
                          animation: 'spin 1s linear infinite',
                        }}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload
                        style={{ marginRight: '8px', color: '#2563eb' }}
                        size={18}
                      />
                      Upload Document
                    </>
                  )}
                </button>
                <style jsx>{`
                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                  @keyframes pulse {
                    0% {
                      opacity: 0.3;
                    }
                    50% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 0.3;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              backgroundColor: '#f9fafb',
            }}
          >
            {messages.length === 0 ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    padding: '0 16px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '12px',
                      color: '#1f2937',
                    }}
                  >
                    PDF Assistant
                  </h2>
                  <p
                    style={{
                      marginBottom: '24px',
                      color: '#4b5563',
                    }}
                  >
                    Ask questions about your PDF documents and I'll help you
                    find the information you need.
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '16px',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <Search
                        style={{ marginBottom: '8px', color: '#2563eb' }}
                        size={20}
                      />
                      <h3
                        style={{
                          fontWeight: '500',
                          marginBottom: '4px',
                          color: '#1f2937',
                        }}
                      >
                        Search Content
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#4b5563',
                        }}
                      >
                        Ask about specific information in your PDFs
                      </p>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <FileText
                        style={{ marginBottom: '8px', color: '#2563eb' }}
                        size={20}
                      />
                      <h3
                        style={{
                          fontWeight: '500',
                          marginBottom: '4px',
                          color: '#1f2937',
                        }}
                      >
                        Summarize Documents
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#4b5563',
                        }}
                      >
                        Get key points from your PDFs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Render each chat message */}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent:
                        msg.role === 'user' ? 'flex-end' : 'flex-start',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '75%',
                        borderRadius: '8px',
                        padding: '12px',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        backgroundColor:
                          msg.role === 'user' ? '#2563eb' : 'white',
                        color: msg.role === 'user' ? 'white' : '#1f2937',
                        border:
                          msg.role === 'user' ? 'none' : '1px solid #e5e7eb',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '8px',
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor:
                              msg.role === 'user' ? '#1d4ed8' : '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px',
                            marginRight: '8px',
                          }}
                        >
                          {msg.role === 'user' ? 'U' : 'A'}
                        </div>
                        <span style={{ fontWeight: '500' }}>
                          {msg.role === 'user' ? 'You' : 'Assistant'}
                        </span>
                      </div>
                      <div style={{ whiteSpace: 'pre-wrap' }}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '75%',
                        borderRadius: '8px',
                        padding: '12px',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '8px',
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px',
                            marginRight: '8px',
                          }}
                        >
                          A
                        </div>
                        <span style={{ fontWeight: '500', color: '#1f2937' }}>
                          Assistant
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#6b7280',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: '#f3f4f6',
                              padding: '6px 12px',
                              borderRadius: '16px',
                            }}
                          >
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <div
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  backgroundColor: '#2563eb',
                                  marginRight: '4px',
                                  animation: 'pulse 1.5s infinite',
                                }}
                              />
                              <div
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  backgroundColor: '#2563eb',
                                  marginRight: '4px',
                                  animation: 'pulse 1.5s infinite',
                                  animationDelay: '0.3s',
                                }}
                              />
                              <div
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  backgroundColor: '#2563eb',
                                  animation: 'pulse 1.5s infinite',
                                  animationDelay: '0.6s',
                                }}
                              />
                            </div>
                            <span
                              style={{ marginLeft: '8px', fontSize: '14px' }}
                            >
                              Analyzing PDFs...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div
            style={{
              padding: '16px',
              borderTop: '1px solid #e5e7eb',
              backgroundColor: 'white',
            }}
          >
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex' }}>
                <CopilotTextarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about your PDFs..."
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                    border: '1px solid #d1d5db',
                    borderRight: 'none',
                    color: '#4b5563',
                    outline: 'none',
                  }}
                  rows={2}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading || !input.trim()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 16px',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    backgroundColor:
                      loading || !input.trim() ? '#d1d5db' : '#2563eb',
                    color: 'white',
                    cursor:
                      loading || !input.trim() ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    transform: loading ? 'scale(0.95)' : 'scale(1)',
                  }}
                >
                  {loading ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <circle cx="12" cy="12" r="10" opacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginTop: '8px',
                  textAlign: 'center',
                }}
              >
                Powered by CopilotKit + CrewAI + OpenAI
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
