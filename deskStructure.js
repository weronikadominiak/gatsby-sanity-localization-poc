import S from "@sanity/desk-tool/structure-builder";
import React from "react";

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
        .icon(() => <span>🇬🇧</span>)
        .child(
          S.list()
            .title("Site settings")
            .items([
              // Singleton
              S.listItem()
                .title("Singleton")
                .icon(() => <span>⚙️</span>)
                .child(
                  S.editor().id("movie").schemaType("movie").documentId("movie")
                ),

              // Peole in given market
              S.listItem()
                .title("English people")
                .icon(() => <span>🧍</span>)
                .child(
                  S.documentTypeList("person")
                    .title("English people")
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
                    .title(`Spanish people`)
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
                .title("Japanese people")
                .child(
                  S.documentTypeList("person")
                    .title(`Only japanese people`)
                    .filter('_type == "person" && market =="jp"')
                ),
            ])
        ),
    ]);
