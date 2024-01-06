export type CatalogueType = {
  title: string
  description: string
  value: string
  pay: string
  type: string
  id: number
}

export type HistoryType = {
  title: string
  description: string
  value: string
  type: string
  id: number
}

export const data = [
  {
    catalogue: [
      {
        title: 'Mobile',
        description: 'The debit is ',
        value: '$34.00',
        pay: 'active',
        type: 'mobile',
        id: 1,
      },
      {
        title: 'Internet and TV',
        description: 'The debit is ',
        value: '$21.00',
        pay: 'active',
        type: 'internet',
        id: 2,
      },
      {
        title: 'Traffic fines',
        description: 'The debit is ',
        value: '$1,221.00',
        pay: 'active',
        type: 'traffic',
        id: 3,
      },
      {
        title: 'Housing services',
        description: 'The debit is ',
        value: '$0.00',
        pay: 'inactive',
        type: 'housing',
        id: 5,
      },
      {
        title: 'Utility payment',
        description: 'The debit is ',
        value: '$442.00',
        pay: 'active',
        type: 'utility',
        id: 6,
      },
    ],
    history: [
      {
        title: 'Card to card',
        description: 'Maria',
        value: '+ $143.00',
        type: 'card',
        id: 1,
      },
      {
        title: 'Apple Music',
        description: 'Online',
        value: '- $467.00',
        type: 'music',
        id: 2,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $467.00',
        type: 'uber',
        id: 3,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $43.00',
        type: 'uber',
        id: 4,
      },
      {
        title: 'Card to card',
        description: 'Service',
        value: '- $2467.00',
        type: 'card',
        id: 5,
      },
    ],
    salaryHistory: [
      {
        title: 'Card to card',
        description: 'Maria',
        value: '+ $143.00',
        type: 'card',
        id: 1,
      },
      {
        title: 'Apple Music',
        description: 'Online',
        value: '- $467.00',
        type: 'music',
        id: 2,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $467.00',
        type: 'uber',
        id: 3,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $43.00',
        type: 'uber',
        id: 4,
      },
      {
        title: 'Card to card',
        description: 'Service',
        value: '- $2467.00',
        type: 'card',
        id: 5,
      },
      {
        title: 'Card to card',
        description: 'Maria',
        value: '+ $143.00',
        type: 'card',
        id: 6,
      },
      {
        title: 'Apple Music',
        description: 'Online',
        value: '- $467.00',
        type: 'music',
        id: 7,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $467.00',
        type: 'uber',
        id: 8,
      },
      {
        title: 'Uber',
        description: 'Service',
        value: '- $43.00',
        type: 'uber',
        id: 9,
      },
      {
        title: 'Card to card',
        description: 'Service',
        value: '- $2467.00',
        type: 'card',
        id: 10,
      },
    ],
  },
]
