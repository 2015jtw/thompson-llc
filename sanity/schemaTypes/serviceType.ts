import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          {
            title: "Sustainable private sector development strategies",
            value: "handshake",
          },
          { title: "Sustainable economic growth planning", value: "leaf" },
          {
            title: "Smart urban development strategy formulation",
            value: "building",
          },
          { title: "Leadership advisory and mentorship", value: "user" },
          { title: "Assessments and analyses", value: "chart-line" },
          {
            title:
              "Linkage with international development agencies and programs",
            value: "globe",
          },
        ],
      },
      description: "Choose an icon to represent this service",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
