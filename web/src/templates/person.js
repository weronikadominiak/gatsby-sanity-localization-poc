import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Person = ({ data, pageContext }) => {
  const uk = pageContext.uk
  let translation = uk ? "en_gb" : "base"

  const name = data.sanityPerson._rawName[translation].name

  return (
    <div>
      <p>Hello I am {name}</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $market: String!) {
    sanityPerson(slug: { current: { eq: $slug } }, market: { eq: $market }) {
      _rawName
      market
    }
  }
`

export default Person
