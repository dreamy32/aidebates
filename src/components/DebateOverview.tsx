'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Bot, Lightbulb } from 'lucide-react';
import type { AIModel } from '@/lib/types';
// import { mockAIModels } from '@/lib/mockData';
import { AiResponse } from '@/payload-types';

interface DebateOverviewProps {
  responses: AiResponse[];
}

export default function DebateOverview({ responses }: DebateOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
      // const text = response.answerReceived[0]?.type === 'markdown'
      const text = response.answerReceived;
      return {
        model: response.aiModel || 'AI Model',
        text
      };
    });

    // Simple analysis based on common keywords and phrases
    responseTexts.forEach(response => {
      const name = typeof response.model === 'string' ? response.model : response.model.modelName;
      // console.log(response.text);
      if (response.text.toLowerCase().includes('agree') || 
          response.text.toLowerCase().includes('likely')) {
        analysis.agreements.add(name);
      }
      if (response.text.toLowerCase().includes('however') || 
          response.text.toLowerCase().includes('but') ||
          response.text.toLowerCase().includes('although')) {
        analysis.differences.add(name);
      }
      if (response.text.toLowerCase().includes('unique') || 
          response.text.toLowerCase().includes('specifically') ||
          response.text.toLowerCase().includes('notably')) {
        analysis.uniqueInsights.add(name);
      }
    });
    console.log(analysis);
    return analysis;
  };

  const analysis = analyzeResponses();

  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 overflow-hidden animate-fadeIn">
      {isExpanded ? (
        <div className="rounded-xl border-3 border-primary overflow-hidden shadow-[0_4px_24px_rgba(170,216,255,0.3)] transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-pallid-blue to-mazarine-blue dark:to-dusky-blue-violet dark:from-background px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/90 dark:bg-transparent dark:ring-2 rounded-lg p-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-[22px] font-bold text-text">
                    AI Consensus & Differences
                  </h2>
                  <p className="text-text/80 text-[16px]">
                    Key takeaways from all AI responses
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Collapse overview"
              >
                <ChevronUp className="w-5 h-5 text-text" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-background p-8 space-y-6">
            {/* General Consensus */}
            {analysis.agreements.size > 0 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#28A745]/10 text-[#28A745]">
                    ✓
                  </span>
                  <h3 className="text-[20px] font-semibold text-text">
                    General Agreement
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-placeholder pl-11">
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
                  <h3 className="text-[20px] font-semibold text-text">
                    Key Differences
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-placeholder pl-11">
                  {Array.from(analysis.differences).join(', ')} present different viewpoints or considerations.
                </p>
              </div>
            )}

            {/* Unique Insights */}
            {analysis.uniqueInsights.size > 0 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    🔍
                  </span>
                  <h3 className="text-[20px] font-semibold text-text">
                    Unique Insights
                  </h3>
                </div>
                <p className="text-[18px] leading-relaxed text-placeholder pl-11">
                  {Array.from(analysis.uniqueInsights).join(', ')} provide additional unique perspectives.
                </p>
              </div>
            )}

            {/* Generated Label */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-placeholder" />
                <p className="text-small text-placeholder">
                  This overview is automatically generated based on AI responses
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full bg-background rounded-xl border-3 border-primary px-6 py-4 flex items-center justify-center space-x-2 text-primary hover:bg-primary/5 transition-colors"
        >
          <Lightbulb className="w-5 h-5" />
          <span className="font-semibold">View AI Takeaways</span>
        </button>
      )}
    </div>
  );
}