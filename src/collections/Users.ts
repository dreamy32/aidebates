import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'username', 'email'],
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

    //full name
    // username
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      type: 'row',
      //fullName
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'fullName',
      admin: {
        hidden: true,
      },
      type: 'text',
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.firstName && data?.lastName) {
              return `${data.firstName} ${data.lastName}`;// Dynamically set the title
            }
            return 'User';
          },
        ],
      },
    }
  ],
}
