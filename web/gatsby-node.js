const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const people = await graphql(`
    {
      allSanityPerson {
        nodes {
          market
          slug {
            current
          }
          slugUK {
            current
          }
        }
      }
    }
  `)

  const generatePage = (data, templatePath, componentPath) => {
    data.forEach(element => {
      // Create page for given market
      if (element.slug) {
        const path = `${element.market || "en"}/${element.slug.current}`

        createPage({
          path,
          component: require.resolve(templatePath),
          context: {
            slug: element.slug.current,
            market: element.market,
          },
        })

        console.log(path)
      }

      // add generating uk page for every English page with en-uk, check if they have custom slug

      // Check if page should have English UK version
      if (element.slugUK) {
        const path = `en-uk/${element.slug.current}`
        createPage({
          path,
          component: require.resolve(templatePath),
          context: {
            slug: element.slug.current,
            market: element.market,
            uk: true,
          },
        })
        console.log(path)
      }
    })

    if (data.errors) {
      reporter.panic("Failed to create posts", pagesResults.errors)
    }
  }

  generatePage(people.data.allSanityPerson.nodes, `./src/templates/person.js`)
}
