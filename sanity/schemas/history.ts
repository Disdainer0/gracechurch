import { defineType, defineField } from "sanity";

export default defineType({
  name: "history",
  title: "Історія",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Заголовок сторінки",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Фонове зображення",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Вступний текст",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Розділи історії",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Заголовок розділу",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "paragraphs",
              title: "Параграфи",
              type: "array",
              of: [{ type: "text" }],
            },
            {
              name: "list",
              title: "Список (опціонально)",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "afterList",
              title: "Текст після списку",
              type: "text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentDayTitle",
      title: 'Заголовок секції "Церква сьогодні"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentDayImage",
      title: 'Зображення секції "Церква сьогодні"',
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentDayContent",
      title: 'Текст секції "Церква сьогодні"',
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentDayMinistries",
      title: "Список служінь",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Історія церкви",
      };
    },
  },
});
