import React from 'react'
import "./newuser.css"

export default function NewUser() {
    return (
        <div className="newuser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label className="newUserLabelName">Username</label>
                    <input className="newuserInput" type="text" placeholder="text"></input>
                </div>
                <div className="newUserItem">
                    <label className="newUserLabelFullname">Fullname</label>
                    <input className="newuserInput" type="text" placeholder="Jane Snow"></input>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input className="newuserInput" type="email" placeholder="jon@gmail.com"></input>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input className="newuserInput" type="password" placeholder="password"></input>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input className="newuserInput" type="text" placeholder="+63 9957878797"></input>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input className="newuserInput" type="text" placeholder="Manila, Philippines"></input>
                </div>
                <div className="newUserItem">
                        <label>Gender</label>
                            <div className="newUserGender">
                            <input className="newuserInput" type="radio" id="male" value="male"  />
                            <label for="male">Male</label>
                            
                            <input className="newuserInput" type="radio" id="female" value="female"  />
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                </div>
                
            </form>
            <button className="newUserButton">Create</button>
        </div>
    );
}
