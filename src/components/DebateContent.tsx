'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, ChevronDown, ChevronUp, Globe, ThumbsUp, ThumbsDown } from 'lucide-react';
import { mockAIResponses, mockAIModels } from '@/lib/mockData';
import { ModelIcon } from '@/components/ModelIcon';
import type { Debate } from '@/lib/types';

export default function DebateContent({ debate }: { debate: Debate }) {
  const [activeResponse, setActiveResponse] = useState(mockAIResponses[0].id);
  const [expandedResponses, setExpandedResponses] = useState<string[]>([]);
  
  const responses = mockAIResponses.filter(response => 
    debate.aiResponses.includes(response.id)
  );
  
  const getAIModel = (modelId: string) => {
    return mockAIModels.find(model => model.id === modelId);
  };

  const formatTimeAgo = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    return new Date(dateString).toLocaleDateString();
  };

  const toggleExpand = (responseId: string) => {
    setExpandedResponses(prev => 
      prev.includes(responseId)
        ? prev.filter(id => id !== responseId)
        : [...prev, responseId]
    );
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-background rounded-xl border border-border shadow-sm">
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {responses.map(response => {
            const model = getAIModel(response.aiModel);
            return (
              <button
                key={response.id}
                onClick={() => setActiveResponse(response.id)}
                className={`flex items-center px-6 py-4 border-b-2 focus:outline-none transition-colors ${
                  activeResponse === response.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-placeholder hover:text-text hover:border-border'
                }`}
              >
                <ModelIcon type={model?.iconType || 'bot'} className="w-5 h-5 mr-2" />
                <span className="font-medium">{model?.modelName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Response Content */}
      <div className="divide-y divide-border">
        {responses.map(response => {
          const model = getAIModel(response.aiModel);
          const isExpanded = expandedResponses.includes(response.id);
          const isMarkdown = response.answerReceived[0]?.type === 'markdown';
          const responseText = isMarkdown 
            ? response.answerReceived[0]?.text || ''
            : response.answerReceived.map(block => block.children?.[0].text).join('\n\n');
          
          return (
            <div
              key={response.id}
              className={`p-6 ${activeResponse === response.id ? 'block' : 'hidden'} bg-[#EAF5FF] dark:bg-background rounded-xl`}
            >
              {/* Response Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-primary">{model?.modelName}</span>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-placeholder" />
                    <span className={`text-small px-2 py-0.5 rounded-full ${
                      response.webSearchEnabled
                        ? 'bg-primary/10 text-primary'
                        : 'bg-pale-camp-blue text-placeholder'
                    }`}>
                      Web Search: {response.webSearchEnabled ? 'On' : 'Off'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(responseText)}
                  className="px-3 py-1.5 bg-border hover:bg-primary text-text hover:text-white dark:hover:text-black rounded-full transition-colors flex items-center space-x-1"
                  title="Copy response"
                >
                  <Copy className="w-4 h-4" />
                  <span className="text-small font-medium">Copy</span>
                </button>
              </div>

              {/* Response Content */}
              <div className="font-inter text-[18px] leading-[1.6] tracking-[0.03em]">
                <div className={`space-y-4 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                  {isMarkdown ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      className="prose prose-blue max-w-none"
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-4 text-text" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-5 mb-3 text-text" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-4 mb-2 text-text" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 text-text" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                        li: ({node, ...props}) => <li className="mb-2" {...props} />,
                        hr: ({node, ...props}) => <hr className="my-6 border-border" {...props} />,
                        blockquote: ({node, ...props}) => (
                          <blockquote className="border-l-4 border-primary pl-4 my-4 text-placeholder" {...props} />
                        ),
                        code: ({node, ...props}: any) => {
                          const { inline } = props;
                          return inline 
                            ? <code className="bg-primary/10 px-1.5 py-0.5 rounded text-primary font-mono text-sm" {...props} />
                            : <code className="block bg-primary/10 p-4 rounded-lg text-text font-mono text-sm my-4" {...props} />;
                        },
                      }}
                    >
                      {responseText}
                    </ReactMarkdown>
                  ) : (
                    response.answerReceived.map((block, index) => (
                      <p key={index} className="text-text">
                        {block.children?.[0].text}
                      </p>
                    ))
                  )}
                </div>
                
                {responseText.length > 300 && (
                  <button
                    onClick={() => toggleExpand(response.id)}
                    className="mt-4 flex items-center text-primary hover:text-text transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        <span className="font-medium">Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        <span className="font-medium">Show More</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Response Footer */}
              <div className="mt-6 flex items-center justify-between text-small text-placeholder">
                <span>Generated {formatTimeAgo(response.dateOfResponse)}</span>
                <div className="flex items-center space-x-4">
                  <button className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}