import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "Головна сторінка",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Заголовок Hero секції",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroQuote",
      title: "Цитата Hero секції",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroQuoteReference",
      title: "Посилання на цитату",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroVideo",
      title: "Hero відео",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
    defineField({
      name: "aboutTitle",
      title: 'Заголовок секції "Про церкву"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutContent",
      title: 'Текст секції "Про церкву"',
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutImage",
      title: 'Зображення секції "Про церкву"',
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutButtonText",
      title: "Текст кнопки",
      type: "string",
      initialValue: "Читати історію",
    }),
    defineField({
      name: "beliefsTitle",
      title: 'Заголовок секції "Наші вірування"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "beliefsBackgroundImage",
      title: "Фонове зображення секції вірувань",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "beliefs",
      title: "Вірування",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Заголовок",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "content",
              title: "Текст",
              type: "array",
              of: [{ type: "text" }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesTitle",
      title: "Заголовок секції служінь",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesSubtitle",
      title: "Підзаголовок секції служінь",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesDescription",
      title: "Опис трансляції",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Головна сторінка",
      };
    },
  },
});
