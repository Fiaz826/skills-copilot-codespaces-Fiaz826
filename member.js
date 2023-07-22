function skillsMember() {
  return {
    name: 'skills',
    type: 'group',
    title: 'Skills',
    description: 'Skills',
    fields: [
      {
        name: 'skills',
        type: 'array',
        title: 'Skills',
        description: 'Skills',
        of: [{ type: 'skill' }],
      },
    ],
  };
}