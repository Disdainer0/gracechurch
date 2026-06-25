import { defineType, defineField } from "sanity";

export default defineType({
  name: "support",
  title: "Підтримка",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Заголовок сторінки",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introText",
      title: "Вступний текст",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bibleVerse",
      title: "Біблійний вірш",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "donationSectionTitle",
      title: "Заголовок секції пожертв",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "recipientName",
      title: "Найменування одержувача",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "recipientCode",
      title: "Код одержувача",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bankName",
      title: "Назва банку",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iban",
      title: "IBAN",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "receiver",
      title: "Одержувач",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paymentPurpose",
      title: "Призначення платежу",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "donateButtonText",
      title: "Текст кнопки пожертви",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "donateButtonUrl",
      title: "Посилання кнопки пожертви",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Підтримка церкви",
      };
    },
  },
});
