import { CollectionConfig } from 'payload';

export const Debates: CollectionConfig = {
  slug: 'debates',
  admin: {
    useAsTitle: 'title',
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
      name: 'predictedEventDate',
      type: 'date',
    },
    {
      name: 'realOutcome',
      type: 'textarea',
    },
  ],
};

export const AIResponses: CollectionConfig = {
  slug: 'ai-responses',
  admin: {
    useAsTitle: 'customTitle',
  },
  fields: [
    {
      name: 'associatedDebate',
      type: 'relationship',
      relationTo: 'debates',
    },
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
    // {
    //   name: 'temperature',
    //   type: 'number',
    //   required: true,
    //   min: 0,
    //   max: 1,
    // },
    // {
    //   name: 'dateOfResponse',
    //   type: 'date',
    //   required: true,
    // },
    {
      name: 'answerReceived',
      type: 'textarea',
      required: true,
    },
    {
        name: 'customTitle',
        type: 'text',
        admin: {
          hidden: true, // This field is computed and should not be manually edited
        },
        hooks: {
          beforeChange: [
            ({ data }) => {
              if (data?.aiModel) {
                return `${data.aiModel} response`; // Dynamically set the title
              }
              return 'AI Response';
            },
          ],
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
