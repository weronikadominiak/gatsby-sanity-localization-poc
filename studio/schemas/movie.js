import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "movie",
  title: "Movie",
  type: "document",
  icon,
  fields: [
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
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "castMembers",
      title: "People",
      type: "reference",
      options: {
        // https://www.sanity.io/docs/reference-type#8118f73f6758
        filter: ({ document }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          if (document.market) {
            return {
              filter: "market == $market",
              params: { market: document.market },
            };
          }
          return true;
        },
      },
      to: [{ type: "person" }],
    },
  ],
};
