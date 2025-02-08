export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Debate {
  id: string;
  title: string;
  slug: string;
  prompt: string;
  createdBy: string;
  createdAt: string;
  published: boolean;
  aiResponses: string[];
  tags: { tag: string }[];
  predictedEventDate: string;
  realOutcome: string | null;
}

export interface AIResponse {
  id: string;
  associatedDebate: string;
  aiModel: string;
  webSearchEnabled: boolean;
  temperature: number;
  dateOfResponse: string;
  answerReceived: Array<{
    type: string;
    children?: { text: string }[];
    text?: string;
  }>;
  customTitle: string;
}

export interface AIModel {
  id: string;
  modelName: string;
  provider: string;
  iconType?: 'openai' | 'anthropic' | 'bot' | 'deepseek' | 'qwen';
  capabilities: { capability: string }[];
  limitations: string;
  pricing: {
    inputPrice: number;
    outputPrice: number;
    currency: string;
    unit: string;
  };
}