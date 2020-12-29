import React from 'react'
import { Link } from 'gatsby'

import Menu from '../../assets/menu.svg'

export default function NavBar() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu__item">
          <Link to="/">About</Link>
        </li>
        <li className="menu__item">
          <Link to="/">Walks</Link>
        </li>
        <li className="menu__item">
          <Link to="/">Contact</Link>
        </li>
        <li className="menu__toggle">
          <Link to="/">
            <Menu />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
