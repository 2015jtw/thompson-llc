import { defineField } from "sanity";

export const heroType = {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "missionStatement",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryButtonText",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryButtonSlug",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryButtonText",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryButtonSlug",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      type: "image",
    }),
  ],
};
