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
              {
                type: "string",
                name: "character_image",
                label: "Image",

              },
              {
                type: "string",
                name: "lamp_image",
                label: "Image",

              },
              {
                type: "string",
                name: "cube_image",
                label: "Image",

              },
              {
                type: "string",
                name: "chess_image",
                label: "Image",

              },
              {
                type: "string",
                name: "form_action",
                label: "Form URL",

              },

              // Add other banner fields as needed
            ],
          },
          {
            type: "object",
            name: "about_info",
            label: "About Info",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
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
                name: "image",
                label: "image",
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
            label: "About Features",
            fields: [

              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },

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
                name: "description_two",
                label: "Description",
              },
              {
                type: "string",
                name: "description",
                label: "Description bottom",
              },
              
              {
                type: "string",
                name: "image",
                label: "image",
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
                  {
                    type: "string",
                    name: "image",
                    label: "image",
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

      {
        name: "about",
        label: "About Us",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about*",
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
            description: "Enter the description",
          },
          {
            type: "string",
            name: "layout",
            label: "layout name",
            description: "It is default value - DO NOT CHANGE",

          },

          // sub section
          {
            type: "object",
            name: "about_us",
            label: "About Us",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "image",
                name: "image",
                label: "Upload Image",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
              },

            ],
          },
          // sub section - facts
          {
            type: "object",
            name: "facts",
            label: "Facts Section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable or Disable",
              },
              {
                type: "object",
                name: "fact_item",
                label: "Fact Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "counter",
                    label: "Counter",
                  },
                  {
                    type: "string",
                    name: "counter_append",
                    label: "Counter Append",
                  },
                  {
                    type: "string",
                    name: "counter_prepend",
                    label: "Counter Prepend",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },

                ],
                itemProps: (item) => ({
                  label: item.title, // Use the question as the display label
                }),
              },
            ],
          },
          // sub section for our story
          {
            type: "object",
            name: "our_story",
            label: "Our story Section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable or Disable",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
              },
              {
                type: "object",
                name: "image",
                label: "Image",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "item",
                    label: "Images",
                    description: "Upload multiple images",

                  },
                ],

              },



            ],
            itemProps: (item) => ({
              label: item.title, // Use the question as the display label
            }),

          },

          // sub section teams 

          {
            type: "object",
            name: "team",
            label: "Team Section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable or Disable",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
              },
              {
                type: "object",
                name: "team_item",
                label: "Team Members",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "designation",
                    label: "Designation",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },

                  {
                    type: "object",
                    name: "social_links",
                    label: "Social Links",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        label: "Name",
                      },
                      {
                        type: "string",
                        name: "link",
                        label: "link",
                      },


                    ],
                  },
                ],
                itemProps: (item) => ({
                  label: item.name, // Use the name
                }),
              },
            ],

          },

        ],
      },

      // ... Subjects...

      {
        name: "subjects",
        label: "Subjects",
        path: "content/english/subjects",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
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
            type: "string",
            name: "subject",
            label: "subject ",
            description: "Example: NR 222",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },


      // How it works

      {
        name: "howitworks",
        label: "How It Works",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "how*",
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
            description: "Enter the description",
          },
          {
            type: "string",
            name: "layout",
            label: "layout name",
            description: "It is default value - DO NOT CHANGE",

          },

          // work_process

          {
            type: "object",
            name: "work_process",
            label: "work_process",
            itemProps: (item) => ({
              label: item.name, // Use the name
            }),
            fields: [

              {
                type: "boolean",
                name: "enable",
                label: "Enable Slider",

              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "content",
                label: "content",
              },

              // tablist
              {
                label: "Tablist",
                name: "tablist",
                type: "object",
                list: true,

                fields: [
                  {
                    label: "Tab Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Tablist Items",
                    name: "tablist_item",
                    type: "object",
                    list: true,

                    fields: [
                      {
                        label: "Subtitle",
                        name: "subtitle",
                        type: "string",
                      },
                      {
                        label: "Description",
                        name: "description",
                        type: "string",
                      },
                      {
                        label: "Image",
                        name: "image",
                        type: "string",
                      },
                    ],
                    itemProps: (item) => ({
                      label: item.subtitle, // Use the name
                    }),

                  },
                ],
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),

              },



            ],


          },

          // working steps

          {
            label: "Working Steps",
            name: "working_steps",
            type: "object",
            fields: [
              {
                label: "Enable",
                name: "enable",
                type: "boolean",
              },
              {
                label: "Title",
                name: "title",
                type: "string",
              },
              {
                label: "Subtitle",
                name: "subtitle",
                type: "string",
              },
              {
                label: "Content",
                name: "content",
                type: "string",
              },
              {
                label: "Step One",
                name: "step_one",
                type: "object",
                fields: [
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Subtitle",
                    name: "subtitle",
                    type: "string",
                  },
                  {
                    label: "Content",
                    name: "content",
                    type: "string",
                  },
                  {
                    label: "Process",
                    name: "process",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        label: "Name",
                        name: "name",
                        type: "string",
                      },
                      {
                        label: "Image",
                        name: "image",
                        type: "string",
                      },
                    ],
                    itemProps: (item) => ({
                      label: item.name, // Use the name
                    }),

                  },
                ],
              },
              {
                label: "Step Two",
                name: "step_two",
                type: "object",
                fields: [
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Subtitle",
                    name: "subtitle",
                    type: "string",
                  },
                  {
                    label: "Content",
                    name: "content",
                    type: "string",
                  },
                  {
                    label: "Image",
                    name: "image",
                    type: "string",
                  },
                ],
              },
              {
                label: "Step Three",
                name: "step_three",
                type: "object",
                fields: [
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Subtitle",
                    name: "subtitle",
                    type: "string",
                  },
                  {
                    label: "Content",
                    name: "content",
                    type: "string",
                  },
                  {
                    label: "Image",
                    name: "image",
                    type: "string",
                  },
                ],
              },
            ],
          },




        ],
      },
      // contact  page

      {
        name: "contact",
        label: "Contact Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
          },
          {
            label: "Layout name",
            name: "layout",
            type: "string",
            description: "It is default value - DO NOT CHANGE",
          },
        
          {
            label: "Contact Information",
            name: "contact_info",
            type: "object",
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string",
              },
              {
                label: "Subtitle",
                name: "subtitle",
                type: "string",
              },
              {
                label: "Content",
                name: "content",
                type: "string",
              },
              {
                label: "Blocks",
                name: "blocks",
                type: "object",
                list: true,
                fields: [
                  {
                    label: "Image",
                    name: "image",
                    type: "string",
                  },
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Description",
                    name: "description",
                    type: "string",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "string",
                  },
                  {
                    label: "Phone",
                    name: "phone",
                    type: "string",
                  },
                ],
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
              },
            ],
          },
        ],
      },
      // Pricing page 

      {
        name: "pricing",
        label: "Pricing Page",
        path: "content/english", // Adjust the path based on your folder structure
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "pricing",
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
        
          {
            label: "Layout",
            name: "layout",
            type: "string",
            description: "DO NOT CHANGE - It is default value",
          },
          
          {
            label: "Pricing",
            name: "pricing",
            type: "object",
            list: true,
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string",
              },
              {
                label: "Price",
                name: "price",
                type: "string",
              },
              {
                label: "Month",
                name: "per",
                type: "string",
              },
              {
                type: "string",
                name: "features_list",
                label: "features_list",
                list: true
              },
            ],
            itemProps: (item) => ({
              label: item.name, // Use the question as the display label
            }),
          },
        ],
      },

      // testimonials page

      {
        name: "testimonials",
        label: "Testimonials Page",
        path: "content/english", // Adjust the path based on your folder structure
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonials", // Adjust the filename based on your actual file name
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          
          {
            label: "Layout",
            name: "layout",
            type: "string",
            description: "DO NOT CHANGE - It is default value",
          },
          
          {
            label: "Testimonials",
            name: "testimonials",
            type: "object",
            list: true,
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string",
              },
              {
                label: "Designation",
                name: "designation",
                type: "string",
              },
              {
                label: "Image",
                name: "image",
                type: "string",
              },
              {
                label: "Content",
                name: "content",
                type: "string",
              },
            ],
            itemProps: (item) => ({
              label: item.name, // Use the name as the display label
            }),
          },
        ],
      },
      
      //elements
      {
        name: "elements",
        label: "Elements Page",
        path: "content/english", // Adjust the path based on your folder structure
        match: {
          include: "elements", // Adjust the filename based on your actual file name
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        
        ],
      },
      
      // get quote page

      {
        name: "quote",
        label: "Get Quote Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "get-quote",
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
          },
          {
            label: "Layout name",
            name: "layout",
            type: "string",
            description: "It is default value - DO NOT CHANGE",
          },
        
          {
            label: "Contact Information",
            name: "contact_info",
            type: "object",
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string",
              },
              {
                label: "Subtitle",
                name: "subtitle",
                type: "string",
              },
              {
                label: "Content",
                name: "content",
                type: "string",
              },
              {
                label: "Blocks",
                name: "blocks",
                type: "object",
                list: true,
                fields: [
                  {
                    label: "Image",
                    name: "image",
                    type: "string",
                  },
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Description",
                    name: "description",
                    type: "string",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "string",
                  },
                  {
                    label: "Phone",
                    name: "phone",
                    type: "string",
                  },
                ],
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
              },
            ],
          },
        ],
      },

      

    ],
  },
});
