import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function AddUser(){

    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName:"",
        name:"",
        email:""
    })

    //object deconstruction
    const {username,name, email} = user

    //event handling
    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
    }

    //function to submit data
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
            .then(data=>
            {
                console.log(data)
                navigate("/")
            });

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center mg=4">Register user</h2>

                    <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="UserName" className="form-label">
                            User name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your user name"
                            name="userName"
                            value={username}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </div>
                    </form>

                </div>

            </div>

        </div>
    )
}
export default AddUser;