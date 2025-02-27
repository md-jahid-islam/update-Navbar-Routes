import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className=' '>
            <ul className=" flex justify-center items-center gap-7 ">
                <li className=''> <Link to={"/"}>Home</Link></li>
                <li> <Link to={"/About"}>About</Link></li>
                <li> <Link to={"/Blogs"}>Blogs</Link></li>
                <li> <Link to={"/Contact"}>Contact</Link></li>
            </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar