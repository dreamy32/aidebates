// import { User } from './types';

// Mock Users (referenced by debates)
export const mockUsers: any[] = [
  {
    id: '1',
    email: 'sarah.chen@example.com',
    firstName: 'Sarah',
    lastName: 'Chen',
  },
  {
    id: '2',
    email: 'marcus.rodriguez@example.com',
    firstName: 'Marcus',
    lastName: 'Rodriguez',
  }
];

// Mock AI Models
export const mockAIModels = [
  {
    id: 'gpt4',
    modelName: 'GPT-4',
    provider: 'OpenAI',
    capabilities: [
      { capability: 'Advanced reasoning' },
      { capability: 'Code generation' },
      { capability: 'Natural language understanding' }
    ],
    limitations: 'Knowledge cutoff date of 2023. May occasionally produce creative but incorrect answers.',
    pricing: {
      inputPrice: 0.03,
      outputPrice: 0.06,
      currency: 'USD',
      unit: 'per 1k tokens'
    }
  },
  {
    id: 'claude2',
    modelName: 'Claude 2',
    provider: 'Anthropic',
    capabilities: [
      { capability: 'Long context window' },
      { capability: 'Technical analysis' },
      { capability: 'Mathematical reasoning' }
    ],
    limitations: 'May be overly cautious in responses. Limited creative tasks.',
    pricing: {
      inputPrice: 0.008,
      outputPrice: 0.024,
      currency: 'USD',
      unit: 'per 1k tokens'
    }
  }
];

// Mock Debates
export const mockDebates = [
  {
    id: '1',
    title: 'Will AGI be achieved by 2030?',
    slug: 'agi-2030-prediction',
    prompt: 'Based on current technological trends and research progress, will Artificial General Intelligence (AGI) be achieved by the year 2030? Consider major breakthroughs, limitations, and expert opinions in your analysis.',
    createdBy: '1', // References Sarah Chen
    createdAt: '2024-03-15T08:00:00Z',
    published: true,
    aiResponses: ['1', '2'], // References to AI responses below
    tags: [
      { tag: 'AGI' },
      { tag: 'Future Tech' },
      { tag: 'AI Development' }
    ],
    predictedEventDate: '2030-12-31T23:59:59Z',
    realOutcome: null // Not yet determined
  },
  {
    id: '2',
    title: 'Will SpaceX land humans on Mars by 2027?',
    slug: 'spacex-mars-2027',
    prompt: 'Considering SpaceX\'s current progress, technical capabilities, and stated timeline, will they successfully land human astronauts on Mars by 2027? Analyze the technical, logistical, and safety challenges.',
    createdBy: '2', // References Marcus Rodriguez
    createdAt: '2024-03-14T15:30:00Z',
    published: true,
    aiResponses: ['3'],
    tags: [
      { tag: 'Space Exploration' },
      { tag: 'SpaceX' },
      { tag: 'Mars Mission' }
    ],
    predictedEventDate: '2027-12-31T23:59:59Z',
    realOutcome: null
  }
];

// Mock AI Responses
export const mockAIResponses = [
  {
    id: '1',
    associatedDebate: '1', // References AGI debate
    aiModel: 'gpt4', // References GPT-4
    webSearchEnabled: true,
    temperature: 0.7,
    dateOfResponse: '2024-03-15T08:15:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Based on current trends and expert opinions, it is unlikely that AGI will be achieved by 2030. While we\'ve seen remarkable progress in narrow AI applications, the fundamental breakthroughs needed for AGI, including consciousness, common sense reasoning, and true understanding, remain elusive. Most leading AI researchers estimate AGI is at least 20-50 years away.'
          }
        ]
      }
    ],
    customTitle: 'GPT-4 response'
  },
  {
    id: '2',
    associatedDebate: '1', // References AGI debate
    aiModel: 'claude2', // References Claude 2
    webSearchEnabled: true,
    temperature: 0.5,
    dateOfResponse: '2024-03-15T09:00:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'While significant advances in AI have been made, achieving AGI by 2030 appears highly improbable. Current AI systems, despite their impressive capabilities in specific domains, lack the generalized intelligence, transfer learning abilities, and consciousness that characterize human-level intelligence. The technical challenges and our limited understanding of human intelligence suggest a longer timeline.'
          }
        ]
      }
    ],
    customTitle: 'Claude 2 response'
  },
  {
    id: '3',
    associatedDebate: '2', // References Mars mission debate
    aiModel: 'gpt4', // References GPT-4
    webSearchEnabled: true,
    temperature: 0.6,
    dateOfResponse: '2024-03-14T16:00:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'SpaceX\'s 2027 Mars landing goal faces significant challenges. While Starship development has shown promise, the timeline appears optimistic given the need for life support systems, radiation protection, and extensive testing. A more realistic timeline might be 2030-2035, allowing for proper development and testing of critical systems.'
          }
        ]
      }
    ],
    customTitle: 'GPT-4 response'
  }
];

// Types for TypeScript support
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
  answerReceived: {
    type: string;
    children: { text: string }[];
  }[];
  customTitle: string;
}

export interface AIModel {
  id: string;
  modelName: string;
  provider: string;
  capabilities: { capability: string }[];
  limitations: string;
  pricing: {
    inputPrice: number;
    outputPrice: number;
    currency: string;
    unit: string;
  };
}