import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Market")
    .items([
      // All of the type
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("English")
        .child(
          S.list()
            .title("Site settings")
            .items([
              // Singleton
              S.listItem()
                .title("Singleton")
                .child(
                  S.editor()
                    .id("person")
                    .schemaType("person")
                    .documentId("person")
                ),

              // Peole in given market
              S.listItem()
                .title("Only english people")
                .child(
                  S.documentTypeList("person")
                    .title("Only english people")
                    .filter('_type == "person" && market =="en"')
                ),
            ])
        ),
      S.listItem()
        .title("Spanish")
        .child(
          S.list()
            .title("Spanish")
            .items([
              // Peole in given market
              S.listItem()
                .title("Only spanish people")
                .child(
                  S.documentTypeList("person")
                    .title(`Only spanish people`)
                    .filter('_type == "person" && market =="es"')
                ),
            ])
        ),
      S.listItem()
        .title("Japanese")
        .child(
          S.list()
            .title("Japanese")
            .items([
              // Peole in given market
              S.listItem()
                .title("Only japanese people")
                .child(
                  S.documentTypeList("person")
                    .title(`Only japanese people`)
                    .filter('_type == "person" && market =="jp"')
                ),
            ])
        ),
    ]);
