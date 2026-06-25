import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Налаштування сайту",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Назва сайту",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Опис сайту",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "address",
      title: "Адреса",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Посилання Google Maps",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeChannelId",
      title: "YouTube Channel ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "copyrightText",
      title: "Текст копірайту",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerCredits",
      title: "Підпис розробника",
      type: "string",
    }),
    defineField({
      name: "socialMediaTitle",
      title: "Заголовок соцмереж",
      type: "string",
      initialValue: "Слідкуй за нами",
    }),
    defineField({
      name: "navigation",
      title: "Навігаційне меню",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Назва",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "path",
              title: "Шлях",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Налаштування сайту",
      };
    },
  },
});
