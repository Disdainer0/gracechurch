import { defineType, defineField } from "sanity";

export default defineType({
  name: "contacts",
  title: "Контакти",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Заголовок сторінки",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sundayServiceTime",
      title: "Час недільного служіння",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekdayServiceDays",
      title: "Дні тижня для молитовного служіння",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekdayServiceTime",
      title: "Час молитовного служіння",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekdayServiceLabel",
      title: "Підпис молитовного служіння",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "mapEmbedUrl",
      title: "Google Maps embed URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Контакти та розклад",
      };
    },
  },
});
