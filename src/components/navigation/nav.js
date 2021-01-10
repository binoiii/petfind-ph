import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div className="flex items-center h-20">
      <header className="mx-6 sm:mx-10 md:mx-20 w-full flex justify-between">
        <div>Logo</div>
        <nav>
          <div>
            <Link>Home</Link>
            <Link className="ml-4 sm:ml-8 md:ml-20">About</Link>
            <Link className="ml-4 sm:ml-8 md:ml-20">Contact</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
