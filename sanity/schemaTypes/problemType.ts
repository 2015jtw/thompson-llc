import { defineField } from "sanity";

export const problemType = {
  name: "problem",
  title: "Problem",
  type: "document",
  fields: [
    defineField({
      name: "hook",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};
