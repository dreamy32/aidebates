import { AiResponse, Debate } from '@/payload-types';
import { revalidatePath } from 'next/cache';
import { CollectionAfterChangeHook, CollectionBeforeChangeHook, CollectionConfig } from 'payload';

const setCustomTitle: CollectionBeforeChangeHook<AiResponse> = async ({ req, data, originalDoc }) => {
  // Get the aiModel value from the new data or original doc.
  const aiModelId = data.aiModel ?? originalDoc?.aiModel;
  let aiModelName = '';

  if (typeof aiModelId === 'string') {
    // Fetch the ai-model document to get its modelName.
    const aiModelDoc = await req.payload.findByID({
      collection: 'ai-models',
      id: aiModelId,
    });
    aiModelName = aiModelDoc?.modelName || '';
  } else if (aiModelId && typeof aiModelId === 'object') {
    aiModelName = aiModelId.modelName;
  }
  // Build the custom title as "name of the ai model" + answer.
  data.customTitle = `${aiModelName} 🗨️`;
  return data;
};

const revalidateOnChange: CollectionAfterChangeHook<Debate> = async ({
  doc
}) => { 
  // revalidatePath(`/debate/${doc.slug}`);
  revalidatePath('/debates');
 }

export const Debates: CollectionConfig = {
  slug: 'debates',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [revalidateOnChange],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'prompt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'aiResponses',
      type: 'relationship',
      relationTo: 'ai-responses',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'verified',
      type: 'checkbox',
      defaultValue: false,
      access: {
        create: ({ req }) => req.user?.username === 'drseek32',
        read: ({ req }) => req.user?.username === 'drseek32',
        update: ({ req }) => req.user?.username === 'drseek32',
      },
    }
  ],
};

export const AIResponses: CollectionConfig = {
  slug: 'ai-responses',
  admin: {
    useAsTitle: 'customTitle',
  },
  hooks: {
    beforeChange: [setCustomTitle],
  },
  fields: [
    {
      name: 'aiModel',
      type: 'relationship',
      relationTo: 'ai-models',
      required: true,
    },
    {
      name: 'webSearchEnabled',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'thoughtProcess',
      type: 'textarea',
      admin: {
        description: 'AIs such as o3-mini, DeepSeek-R1 use thought process to generate responses.',
      },
    },
    {
      name: 'answerReceived',
      type: 'textarea',
      required: true,
    },
    {
      name: 'linkToChat',
      type: 'text',
    },
    {
      name: 'customTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
  ],
};

export const AIModels: CollectionConfig = {
  slug: 'ai-models',
  admin: {
    useAsTitle: 'modelName',
  },
  fields: [
    {
      name: 'modelName',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'provider',
      type: 'text',
      required: true,
    },
    {
      name: 'capabilities',
      type: 'array',
      fields: [
        {
          name: 'capability',
          type: 'text',
        },
      ],
    },
    {
      name: 'limitations',
      type: 'textarea',
    },
    {
      name: 'pricing',
      type: 'json',
    },
  ],
};
