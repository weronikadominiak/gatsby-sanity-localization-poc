import UserIcon from "part:@sanity/base/user-icon";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: UserIcon,
  fields: [
    // should be defined separetly as it's reusable
    {
      title: "Market",
      name: "market",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Spanish", value: "es" },
          { title: "Japanese", value: "jp" },
        ], // <-- predefined values
      },
    },
    { name: "name", title: "Name", type: "name" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name.base.name",
        maxLength: 96,
      },
    },
    {
      name: "slugUK",
      title: "* Slug UK",
      description:
        "Use only for English language if default slug needs to be replaced with UK version. Name has to be set in the English tab above.",
      type: "slug",
      options: {
        source: "name.en_gb.name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "name.base.name", media: "image" },
  },
};
