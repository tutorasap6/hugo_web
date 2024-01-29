import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Homepage

      {
        name: "home",
        label: "Home Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "*_index*",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Home Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },

              // Add other banner fields as needed
            ],
          },
          {
            type: "object",
            name: "about_info",
            label: "About Section-1",
            fields: [
              {
                type: "string",
                name: "title",
                label: "About Info Title",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "features_list",
                label: "features_list",
                list: true
              },
              // Add other about_info fields as needed
            ],
          },
          {
            type: "object",
            name: "about_features",
            label: "About Section-2",
            fields: [

              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "object",
                name: "features_items",
                label: "About Features Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Feature Item Title",
                  },

                ],
                itemProps: (item) => ({
                  label: item.title, // Use the question as the display label
                }),
              },

              // Add other about_features fields as needed
            ],
          },
        ],
      },

      // ... Blog...

      {
        name: "post",
        label: "Blogs",
        path: "content/english/blog",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        match: {
          exclude: "_index*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Enter the meta description",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "image",
            name: "images",
            label: "Image",
            list: true,
            description: "Upload or select an image.",
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

    ],
  },
});
