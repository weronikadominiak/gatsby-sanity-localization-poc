import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/en/joe">Joe US</Link>
      </li>
      <li>
        <Link to="en-uk/joe">Joe UK</Link>
      </li>
      <li>
        <Link to="es/joe">Joe SP</Link>
      </li>
      <li>
        <Link to="jp/new-jp">Japan</Link>
      </li>
      <li>
        <Link to="es/diego-luna">Spain</Link>
      </li>
    </ul>
  )
}
