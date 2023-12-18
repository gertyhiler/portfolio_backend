import type { Schema, Attribute } from '@strapi/strapi';

export interface TehnologyTailwindcss extends Schema.Component {
  collectionName: 'components_tehnology_tailwindcsses';
  info: {
    displayName: 'tailwindcss';
    icon: 'cube';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tehnology.tailwindcss': TehnologyTailwindcss;
    }
  }
}
