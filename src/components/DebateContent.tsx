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
    <div className="bg-white rounded-xl border border-[#AAD8FF] shadow-sm">
      {/* Tabs */}
      <div className="border-b border-[#AAD8FF]">
        <div className="flex overflow-x-auto">
          {responses.map(response => {
            const model = getAIModel(response.aiModel);
            return (
              <button
                key={response.id}
                onClick={() => setActiveResponse(response.id)}
                className={`flex items-center px-6 py-4 border-b-2 focus:outline-none transition-colors ${
                  activeResponse === response.id
                    ? 'border-[#2792FD] text-[#2792FD]'
                    : 'border-transparent text-[#4A6FA5] hover:text-[#1D3557] hover:border-[#AAD8FF]'
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
      <div className="divide-y divide-[#AAD8FF]">
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
              className={`p-6 ${activeResponse === response.id ? 'block' : 'hidden'} bg-[#EAF5FF]`}
            >
              {/* Response Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-[#2792FD]">{model?.modelName}</span>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-[#4A6FA5]" />
                    <span className={`text-small px-2 py-0.5 rounded-full ${
                      response.webSearchEnabled
                        ? 'bg-[#2792FD]/10 text-[#2792FD]'
                        : 'bg-[#D0D8E6] text-[#4A6FA5]'
                    }`}>
                      Web Search: {response.webSearchEnabled ? 'On' : 'Off'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(responseText)}
                  className="px-3 py-1.5 bg-[#AAD8FF] hover:bg-[#2792FD] text-[#1D3557] hover:text-white rounded-full transition-colors flex items-center space-x-1"
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
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-4 text-[#1D3557]" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-5 mb-3 text-[#1D3557]" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-4 mb-2 text-[#1D3557]" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 text-[#1D3557]" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                        li: ({node, ...props}) => <li className="mb-2" {...props} />,
                        hr: ({node, ...props}) => <hr className="my-6 border-[#AAD8FF]" {...props} />,
                        blockquote: ({node, ...props}) => (
                          <blockquote className="border-l-4 border-[#2792FD] pl-4 my-4 text-[#4A6FA5]" {...props} />
                        ),
                        code: ({node, ...props}: any) => {
                          const { inline } = props;
                          return inline 
                            ? <code className="bg-[#2792FD]/10 px-1.5 py-0.5 rounded text-[#2792FD] font-mono text-sm" {...props} />
                            : <code className="block bg-[#2792FD]/10 p-4 rounded-lg text-[#1D3557] font-mono text-sm my-4" {...props} />;
                        },
                      }}
                    >
                      {responseText}
                    </ReactMarkdown>
                  ) : (
                    response.answerReceived.map((block, index) => (
                      <p key={index} className="text-[#1D3557]">
                        {block.children?.[0].text}
                      </p>
                    ))
                  )}
                </div>
                
                {responseText.length > 300 && (
                  <button
                    onClick={() => toggleExpand(response.id)}
                    className="mt-4 flex items-center text-[#2792FD] hover:text-[#1D3557] transition-colors"
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
              <div className="mt-6 flex items-center justify-between text-small text-[#4A6FA5]">
                <span>Generated {formatTimeAgo(response.dateOfResponse)}</span>
                <div className="flex items-center space-x-4">
                  <button className="p-1.5 hover:bg-[#2792FD]/10 rounded-lg transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-[#2792FD]/10 rounded-lg transition-colors">
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