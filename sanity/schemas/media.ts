import { defineType, defineField } from "sanity";

export default defineType({
  name: "media",
  title: "Медіа",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Заголовок сторінки",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageSubtitle",
      title: "Підзаголовок сторінки",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeChannelId",
      title: "YouTube Channel ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "ID каналу на YouTube для автоматичного завантаження останніх відео",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Медіа сторінка",
      };
    },
  },
});
