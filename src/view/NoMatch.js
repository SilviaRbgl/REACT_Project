import { Link } from "react-router-dom";
import React from 'react'

function NoMatch() {
  return (
    <div>
        <p>Sorry, no results found</p>
        <Link to="/movies">Go back home</Link>
    </div>
  )
}

export default NoMatch