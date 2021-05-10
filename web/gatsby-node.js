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
        createPage({
          path: `${element.market || "en"}/${element.slug.current}`,
          component: require.resolve(templatePath),
        })

        console.log(`${element.market || "en"}/${element.slug.current}`)
      }

      // Check if page should have English UK version
      if (element.slugUK) {
        createPage({
          path: `en-uk/${element.slug.current}`,
          component: require.resolve(templatePath),
        })
        console.log(`en-uk/${element.slug.current}`)
      }
    })

    if (data.errors) {
      reporter.panic("Failed to create posts", pagesResults.errors)
    }
  }

  generatePage(people.data.allSanityPerson.nodes, `./src/templates/person.js`)
}
