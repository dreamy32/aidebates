'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Bot, Lightbulb } from 'lucide-react';
import type { AIResponse, AIModel } from '@/lib/types';
import { mockAIModels } from '@/lib/mockData';

interface DebateOverviewProps {
  responses: AIResponse[];
}

export default function DebateOverview({ responses }: DebateOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const getAIModel = (modelId: string): AIModel | undefined => {
    return mockAIModels.find(model => model.id === modelId);
  };

  // Analyze responses to find agreements and differences
  const analyzeResponses = () => {
    const analysis = {
      agreements: new Set<string>(),
      differences: new Set<string>(),
      uniqueInsights: new Set<string>(),
    };

    if (!responses || responses.length === 0) {
      return analysis;
    }

    // Extract key points from each response
    const responseTexts = responses.map(response => {
      const text = response.answerReceived[0]?.type === 'markdown'
        ? response.answerReceived[0]?.text || ''
        : response.answerReceived[0]?.children?.[0]?.text || '';

      return {
        model: getAIModel(response.aiModel)?.modelName || 'AI Model',
        text
      };
    });

    // Simple analysis based on common keywords and phrases
    responseTexts.forEach(response => {
      if (response.text.toLowerCase().includes('agree') || 
          response.text.toLowerCase().includes('likely')) {
        analysis.agreements.add(response.model);
      }
      if (response.text.toLowerCase().includes('however') || 
          response.text.toLowerCase().includes('but') ||
          response.text.toLowerCase().includes('although')) {
        analysis.differences.add(response.model);
      }
      if (response.text.toLowerCase().includes('unique') || 
          response.text.toLowerCase().includes('specifically') ||
          response.text.toLowerCase().includes('notably')) {
        analysis.uniqueInsights.add(response.model);
      }
    });

    return analysis;
  };

  const analysis = analyzeResponses();

  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 overflow-hidden animate-fadeIn">
      {isExpanded ? (
        <div className="rounded-xl border-3 border-[#2792FD] overflow-hidden shadow-[0_4px_24px_rgba(170,216,255,0.3)] transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#AAD8FF] to-[#75B4FF] px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/90 rounded-lg p-2">
                  <Lightbulb className="w-6 h-6 text-[#2792FD]" />
                </div>
                <div>
                  <h2 className="text-[22px] font-bold text-[#1D3557]">
                    AI Consensus & Differences
                  </h2>
                  <p className="text-[#1D3557]/80 text-[16px]">
                    Key takeaways from all AI responses
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Collapse overview"
              >
                <ChevronUp className="w-5 h-5 text-[#1D3557]" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-8 space-y-6">
            {/* General Consensus */}
            {analysis.agreements.size > 0 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#28A745]/10 text-[#28A745]">
                    ✓
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#1D3557]">
                    General Agreement
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-[#4A6FA5] pl-11">
                  {Array.from(analysis.agreements).join(', ')} show similar perspectives on key points.
                </p>
              </div>
            )}

            {/* Key Differences */}
            {analysis.differences.size > 0 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF8800]/10 text-[#FF8800]">
                    ⚠️
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#1D3557]">
                    Key Differences
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-[#4A6FA5] pl-11">
                  {Array.from(analysis.differences).join(', ')} present different viewpoints or considerations.
                </p>
              </div>
            )}

            {/* Unique Insights */}
            {analysis.uniqueInsights.size > 0 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2792FD]/10 text-[#2792FD]">
                    🔍
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#1D3557]">
                    Unique Insights
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-[#4A6FA5] pl-11">
                  {Array.from(analysis.uniqueInsights).join(', ')} provide additional unique perspectives.
                </p>
              </div>
            )}

            {/* Generated Label */}
            <div className="pt-6 border-t border-[#AAD8FF]">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-[#4A6FA5]" />
                <p className="text-small text-[#4A6FA5]">
                  This overview is automatically generated based on AI responses
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full bg-white rounded-xl border-3 border-[#2792FD] px-6 py-4 flex items-center justify-center space-x-2 text-[#2792FD] hover:bg-[#2792FD]/5 transition-colors"
        >
          <Lightbulb className="w-5 h-5" />
          <span className="font-semibold">View AI Takeaways</span>
        </button>
      )}
    </div>
  );
}