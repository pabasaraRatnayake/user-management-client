import React from 'react'
import {Link} from "react-router-dom";

function  Navbar(){
    return(
        <div>
            <nav class="navbar text-bg-light">
                <div class="container-fluid">

                    <Link className="navbar-brand mb-0 h1" to={"/"}>Dashboard</Link>
                    <Link className="btn btn-outline-success" to="/adduser">Add User</Link>
                </div>

            </nav>
        </div>
    )
}
export default Navbar;