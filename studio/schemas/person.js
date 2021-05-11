import UserIcon from "part:@sanity/base/user-icon";

import client from "part:@sanity/base/client";

// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
export function isUniqueAcrossAllDocuments(slug, options) {
  const { document } = options;

  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    market: document.market,
  };

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && market == $market][0]._id)`;

  return client.fetch(query, params);
}

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
        isUnique: isUniqueAcrossAllDocuments,
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
