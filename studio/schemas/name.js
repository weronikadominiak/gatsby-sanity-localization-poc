export default {
  name: "name",
  title: "Name",
  type: "object",
  options: {
    i18n: true,
    messages: {
      loading: "Loading languages...",
      missingTranslations: "Missing translations message...",
    },
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
  ],
};
