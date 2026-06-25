import { defineType, defineField } from "sanity";

export default defineType({
  name: "ministries",
  title: "Служіння",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Тег (GRASE MEDIA, GRASE HOME...)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Підзаголовок (Керівник: Іван)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Зображення",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Опис служіння",
      type: "text",
      rows: 15,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок відображення",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Порядок, від меншого до більшого",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "tag",
      subtitle: "title",
      media: "image",
    },
  },
});
