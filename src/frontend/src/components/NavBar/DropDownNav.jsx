import React from 'react'
import {Link} from 'react-router-dom'
function DropDownNav() {
  return (
    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to={"profile"}>Profile</Link></li>
        <li><Link to={"forum"}>Forum</Link></li>
        <li><a>Logout</a></li>
    </ul>
  )
}

function DropDownNavLoggedOut() {
  return (
    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to={"login"}>Login</Link></li>
        <li><Link to={"register"}>Register</Link></li>
    </ul>
  )
}

export {DropDownNav, DropDownNavLoggedOut}
