import React, { useState } from 'react';
import { Bot, Calendar, Tag, User, Search, Home, BookOpen, Info, Copy, ChevronDown, ChevronUp, Globe, ThumbsUp, ThumbsDown } from 'lucide-react';
import { mockDebates, mockAIResponses, mockAIModels, mockUsers } from './mockData';

function App() {
  const [activeResponse, setActiveResponse] = useState(mockAIResponses[0].id);
  const [expandedResponses, setExpandedResponses] = useState<string[]>([]);
  
  const debate = mockDebates[0];
  const responses = mockAIResponses.filter(response => 
    debate.aiResponses.includes(response.id)
  );
  
  const getUser = (userId: string) => {
    return mockUsers.find(user => user.id === userId);
  };
  
  const getAIModel = (modelId: string) => {
    return mockAIModels.find(model => model.id === modelId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    return formatDate(dateString);
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
    <div className="min-h-screen bg-[#F7FAFC] text-[#1D3557]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-xs border-b border-[#AAD8FF] z-50">
        <div className="max-w-content mx-auto px-6 h-18">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-8">
              <Bot className="w-8 h-8 text-[#2792FD]" />
              <div className="hidden md:flex items-center space-x-6">
                <NavLink icon={<Home className="w-4 h-4" />} text="Home" />
                <NavLink icon={<Bot className="w-4 h-4" />} text="Compare" active />
                <NavLink icon={<BookOpen className="w-4 h-4" />} text="Docs" />
                <NavLink icon={<Info className="w-4 h-4" />} text="About" />
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4A6FA5]" />
              <input
                type="text"
                placeholder="Search debates..."
                className="w-64 bg-white border border-[#AAD8FF] rounded-lg pl-10 pr-4 py-2 text-[#1D3557] placeholder-[#4A6FA5]/70 focus:outline-none focus:border-[#2792FD] transition-colors"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-content mx-auto px-6 pt-28 pb-16">
        <h1 className="text-title font-semibold mb-8 text-[#1D3557]">{debate.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-3/4">
            {/* Prompt Card */}
            <div className="bg-white rounded-xl border border-[#AAD8FF] p-6 mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-section font-semibold mb-4 text-[#1D3557]">Debate Prompt</h2>
              <p className="text-body text-[#4A6FA5] leading-relaxed">{debate.prompt}</p>
            </div>

            {/* AI Response Section */}
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
                        <Bot className="w-5 h-5 mr-2" />
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
                  const responseText = response.answerReceived.map(block => block.children[0].text).join('\n\n');
                  
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
                          {response.answerReceived.map((block, index) => (
                            <p key={index} className="text-[#1D3557]">
                              {block.children[0].text}
                            </p>
                          ))}
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
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/4 max-w-sidebar">
            <div className="bg-white rounded-xl border border-[#AAD8FF] p-6 shadow-sm">
              <h2 className="text-subtitle font-semibold mb-6 text-[#1D3557]">Debate Details</h2>
              
              {/* Creator */}
              <DetailItem
                icon={<User className="w-5 h-5" />}
                title={`${getUser(debate.createdBy)?.firstName} ${getUser(debate.createdBy)?.lastName}`}
                subtitle="Creator"
              />

              {/* Created Date */}
              <DetailItem
                icon={<Calendar className="w-5 h-5" />}
                title={formatDate(debate.createdAt)}
                subtitle="Created"
              />

              {/* Tags */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Tag className="w-5 h-5 text-[#4A6FA5] mr-2" />
                  <span className="text-small font-medium">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {debate.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-small font-medium bg-[#2792FD]/10 text-[#2792FD] border border-[#2792FD]/30"
                    >
                      {tag.tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Predicted Event Date */}
              <DetailItem
                icon={<Calendar className="w-5 h-5" />}
                title={formatDate(debate.predictedEventDate)}
                subtitle="Predicted Event Date"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#AAD8FF] py-6 mt-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-small text-[#4A6FA5]">
            <div>© 2025 AI Model Comparison. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#1D3557] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1D3557] transition-colors">Privacy</a>
              <span>Powered by Payload & Next.js</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function NavLink({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-2 text-small font-medium transition-colors ${
        active ? 'text-[#2792FD]' : 'text-[#4A6FA5] hover:text-[#1D3557]'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function DetailItem({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center mb-6">
      <div className="text-[#4A6FA5] mr-3">{icon}</div>
      <div>
        <div className="text-small font-medium text-[#1D3557]">{title}</div>
        <div className="text-small text-[#4A6FA5]">{subtitle}</div>
      </div>
    </div>
  );
}

export default App;