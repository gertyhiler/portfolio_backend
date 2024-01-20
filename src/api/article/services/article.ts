/**
 * article service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
  findOne: async (data: string) => {
    const article = await strapi.entityService.findMany("api::article.article", {
      filters: {
        slug: {
          "$eq": data
        },
      },
      populate: {
        seo: {
          populate: "*"
        },
      }
    });

    if (article.length === 0) return;
    //@ts-ignore
    if (article.length > 1) return;
    return article[0];
  }
}));
