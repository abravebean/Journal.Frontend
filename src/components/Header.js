import { Link } from "react-router-dom"
import React from "react"
function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Diary App</div>
      </Link>
    </nav>
  )
}

export default Header