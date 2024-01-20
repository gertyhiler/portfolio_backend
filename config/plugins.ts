export default ({ env }) => ({
  seo: {
    enabled: true,
  },

  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
})
