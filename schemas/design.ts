import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const designType = defineType({
  name: "design",
  type: "document",
  title: "Design",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
    }),

    defineField({
        name: 'description',
        description: 'Enter a short snippet for the blog...',
        title: 'Description',
        type: 'string',
      }),
  



  
    // defineField({
    //   name: "image",
    //   type: "image",
    //   options: { hotspot: true },
    //   fields: [
    //     defineField({
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //     }),
    //   ],
    // }),
    defineField({
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),


  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Design",
        media: image || DocumentTextIcon,
      };
    },
  },
});