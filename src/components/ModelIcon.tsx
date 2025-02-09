import { Bot } from 'lucide-react';
import { SiOpenai, SiClaude, SiGooglegemini } from "react-icons/si";
import { DeepseekIcon, QwenIcon } from '@/components/icons';

export type ModelIconType = 'openai' | 'anthropic' | 'bot' | 'deepseek' | 'qwen';

interface ModelIconProps {
  type: ModelIconType | string;
  className?: string;
}

export function ModelIcon({ type, className = "w-5 h-5" }: ModelIconProps) {
  switch (type) {
    case 'openai':
      return <SiOpenai className={className} />;
    case 'anthropic':
      return <SiClaude className={className} />;
    case 'deepseek':
      return <DeepseekIcon className={className} />;
    case 'qwen':
    case 'alibabacloud':
      return <QwenIcon className={className} />;
    case 'google':
    case 'gemini':
    case 'deepmind':
      return <SiGooglegemini className={className}/>
    case 'bot':
    default:
      return <Bot className={className} />;
  }
}