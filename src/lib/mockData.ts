import type { User, Debate, AIResponse, AIModel } from './types';

// Mock Users (referenced by debates)
export const mockUsers: User[] = [
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
  },
  {
    id: '3',
    email: 'emma.wilson@example.com',
    firstName: 'Emma',
    lastName: 'Wilson',
  }
];

// Mock AI Models
export const mockAIModels: AIModel[] = [
  {
    id: 'gpt4',
    modelName: 'GPT-4',
    provider: 'OpenAI',
    iconType: 'openai',
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
    iconType: 'anthropic',
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
  },
  {
    id: 'palm2',
    modelName: 'PaLM 2',
    provider: 'Google',
    iconType: 'bot',
    capabilities: [
      { capability: 'Multilingual understanding' },
      { capability: 'Contextual analysis' },
      { capability: 'Pattern recognition' }
    ],
    limitations: 'May sometimes provide overly general responses.',
    pricing: {
      inputPrice: 0.01,
      outputPrice: 0.02,
      currency: 'USD',
      unit: 'per 1k tokens'
    }
  },
  {
    id: 'qwen25',
    modelName: 'Qwen2.5-Max',
    provider: 'Alibaba',
    iconType: 'qwen',
    capabilities: [
      { capability: 'Comprehensive analysis' },
      { capability: 'Research synthesis' },
      { capability: 'Current events understanding' }
    ],
    limitations: 'May occasionally include citations that need verification.',
    pricing: {
      inputPrice: 0.015,
      outputPrice: 0.03,
      currency: 'USD',
      unit: 'per 1k tokens'
    }
  }
];

// Mock Debates
export const mockDebates: Debate[] = [
  {
    id: '3',
    title: 'Democracy System Analysis: USA Case Study',
    slug: 'democracy-system-analysis-usa',
    prompt: 'What elements determine if the democracy system of a country is obsolete or not? Based on this, make an analysis on the USA.',
    createdBy: '3', // References Emma Wilson
    createdAt: '2024-03-18T10:00:00Z',
    published: true,
    aiResponses: ['4', '5', '6', '7'], // Added response 7
    tags: [
      { tag: 'Democracy' },
      { tag: 'Political Systems' },
      { tag: 'USA' },
      { tag: 'Governance' }
    ],
    predictedEventDate: '2024-11-05T23:59:59Z', // US Election Day 2024
    realOutcome: null
  },
  {
    id: '1',
    title: 'Will AGI be achieved by 2030?',
    slug: 'agi-2030-prediction',
    prompt: 'Based on current technological trends and research progress, will Artificial General Intelligence (AGI) be achieved by the year 2030? Consider major breakthroughs, limitations, and expert opinions in your analysis.',
    createdBy: '1',
    createdAt: '2024-03-15T08:00:00Z',
    published: true,
    aiResponses: ['1', '2'],
    tags: [
      { tag: 'AGI' },
      { tag: 'Future Tech' },
      { tag: 'AI Development' }
    ],
    predictedEventDate: '2030-12-31T23:59:59Z',
    realOutcome: null
  },
  {
    id: '2',
    title: 'Will SpaceX land humans on Mars by 2027?',
    slug: 'spacex-mars-2027',
    prompt: 'Considering SpaceX\'s current progress, technical capabilities, and stated timeline, will they successfully land human astronauts on Mars by 2027? Analyze the technical, logistical, and safety challenges.',
    createdBy: '2',
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
export const mockAIResponses: AIResponse[] = [
  {
    id: '4',
    associatedDebate: '3',
    aiModel: 'gpt4',
    webSearchEnabled: true,
    temperature: 0.7,
    dateOfResponse: '2024-03-18T10:15:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'The obsolescence of a democratic system can be evaluated through several key elements: voter participation and accessibility, representation effectiveness, institutional integrity, and adaptability to modern challenges. Analyzing the US democracy through these lenses reveals both strengths and concerning trends. While the US maintains strong institutional frameworks and regular elections, it faces challenges in voter accessibility, gerrymandering issues, and the influence of money in politics. The system shows resilience through its checks and balances but requires modernization in areas like digital voting security and campaign finance reform.'
          }
        ]
      }
    ],
    customTitle: 'GPT-4 response'
  },
  {
    id: '5',
    associatedDebate: '3',
    aiModel: 'claude2',
    webSearchEnabled: true,
    temperature: 0.6,
    dateOfResponse: '2024-03-18T10:30:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'A democracy\'s relevance depends on its ability to maintain fundamental principles while evolving with societal needs. Key indicators include electoral integrity, civic engagement, institutional accountability, and systemic responsiveness to change. The US system demonstrates notable durability through its constitutional framework but shows signs of strain in several areas. Specifically, polarization, uneven voter access, and the electoral college system\'s representation challenges suggest the need for careful reform rather than wholesale replacement. The system\'s core principles remain sound, though modernization efforts should focus on strengthening democratic institutions and expanding participation.'
          }
        ]
      }
    ],
    customTitle: 'Claude 2 response'
  },
  {
    id: '6',
    associatedDebate: '3',
    aiModel: 'palm2',
    webSearchEnabled: true,
    temperature: 0.65,
    dateOfResponse: '2024-03-18T10:45:00Z',
    answerReceived: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Democratic system obsolescence can be measured through five critical factors: citizen representation, institutional adaptability, protection of minority rights, transparency, and technological integration. The US democratic system shows mixed results across these metrics. While it maintains strong protections for individual rights and press freedom, it struggles with emerging challenges like digital misinformation and campaign finance transparency. However, the system\'s federal structure and separation of powers continue to provide effective checks and balances, suggesting the need for evolution rather than replacement. Key areas for modernization include election security, digital citizenship, and campaign finance regulations.'
          }
        ]
      }
    ],
    customTitle: 'PaLM 2 response'
  },
  {
    id: '7',
    associatedDebate: '3',
    aiModel: 'qwen25',
    webSearchEnabled: true,
    temperature: 0.7,
    dateOfResponse: '2024-03-18T11:00:00Z',
    answerReceived: [
      {
        type: 'markdown',
        text: `### Analysis of the USA Based on Current Information

The United States, as a leading global democracy and economy, is undergoing significant changes in various domains—political, economic, media, and legal. These shifts provide insights into the state of its democracy, governance, and societal dynamics. Below is an analysis based on the provided information:

---

### **1. Political Landscape**
The 2024 U.S. presidential election marked a pivotal moment, with Donald Trump declared the unofficial winner [[3]]. This outcome reflects ongoing political polarization and shifting voter preferences. Notably, over 90% of counties shifted their voting patterns compared to previous elections, indicating deepening divides or evolving regional priorities [[3]]. 

Trump's expected push against constitutional and legal boundaries during his second term raises concerns about the resilience of democratic norms [[9]]. If unchecked, such actions could undermine the rule of law and erode public trust in democratic institutions. The Supreme Court's recent decisions have already dismantled key protections related to voting rights, environmental regulations, and women's rights, signaling potential challenges for maintaining equitable governance [[8]].

---

### **2. Economic Outlook**
The U.S. economy remains robust, driven by strong consumer spending and high business investment [[4]]. However, future growth hinges significantly on policy decisions, particularly those addressing inflation, trade relations, and technological innovation. For instance, strategic competition with China continues to shape economic policies, reflecting broader geopolitical tensions that began influencing political discourse in the late 1960s [[5]]. 

While the economy appears stable, long-term sustainability depends on addressing structural issues like income inequality and climate change. Failure to do so may exacerbate social discontent and further strain democratic legitimacy.

---

### **3. Media and Information Ecosystem**
The U.S. news media landscape has undergone dramatic transformations over the past decade. Traditional newspaper employment has declined sharply, while digital-native platforms have grown rapidly [[2]]. This shift has implications for how information is disseminated and consumed, often contributing to fragmented audiences and echo chambers. 

During the 2021 pandemic, marketers faced immense challenges in capturing consumer attention amid widespread misinformation and declining trust in traditional media outlets [[6]]. As of 2025, these trends likely persist, complicating efforts to foster informed civic engagement—a cornerstone of functional democracies.

---

### **4. Rule of Law and Judicial System**
Recent Supreme Court rulings highlight a concerning trend: the elevation of executive power above established legal frameworks [[8]]. Decisions undermining voting rights and environmental safeguards threaten the balance of powers enshrined in the Constitution. Such developments risk destabilizing the foundational principles of American democracy, especially if they align with attempts by political leaders to test constitutional limits [[9]].

Moreover, the judiciary's perceived politicization undermines its role as an impartial arbiter, potentially weakening public confidence in the fairness of legal processes.

---

### **5. Public Trust and Democratic Health**
Public perception plays a critical role in sustaining any democratic system. With increasing skepticism toward elected officials, media organizations, and even judicial bodies, there is a growing risk of democratic backsliding. Low levels of trust can lead to voter apathy or disillusionment, which weakens the very fabric of participatory governance.

Efforts to enhance transparency, accountability, and inclusivity are essential to rebuilding faith in democratic institutions. Without meaningful reforms, the U.S. risks seeing its democracy labeled as obsolete or ineffective [[2]].

---

### **Conclusion**
The United States faces multifaceted challenges that test the resilience of its democratic system. While the economy remains strong, political polarization, erosion of civil liberties, and declining trust in institutions pose significant threats. Addressing these issues requires proactive measures to strengthen democratic norms, promote equitable economic policies, and ensure a free and independent press.

Failure to adapt to modern challenges—such as technological disruption, climate change, and global competition—could render the current democratic framework inadequate. Conversely, embracing reform and fostering inclusive participation may help preserve the vitality of American democracy in the years ahead.`
      }
    ],
    customTitle: 'Qwen2.5-Max response'
  },
  {
    id: '1',
    associatedDebate: '1',
    aiModel: 'gpt4',
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
    associatedDebate: '1',
    aiModel: 'claude2',
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
    associatedDebate: '2',
    aiModel: 'gpt4',
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