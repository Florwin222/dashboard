import React from 'react'
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className = "user">
           <div className="userclassContainer">
               <h1 className="userclassTitle">Edit User</h1>
               <Link to='/newUser'>     
               <button className="userAddButton">Create</button>
               </Link>
           </div>
           <div className="userContainer">
               <div className="userPop">
                   <div className="userTop">
                       <img
                        className="usershowImg"
                        src="https://images.pexels.com/photos/9469740/pexels-photo-9469740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="user image"
                       />
                       <div className="usershowTitle">
                           <span className="usershowUsername">FG Abayon</span>
                           <span className="usershowPosition">Web Development</span>
                       </div>
                   </div>
                   <div className="userBottom">
                   <span className="usershowPosition2">Account Details</span>

                     <div className="userbottomContainer">
                       <PermIdentity className="userShowIcon"/>
                       <span className="userShowInfoTitle">fgabayon</span>
                    </div>
                    <div className="userbottomContainer">
                       <CalendarToday className="userShowIcon"/>
                       <span className="userShowInfoTitle">06.09.2021</span>
                    </div>

                    <span className="usershowPosition2">Contact Details</span>
                    <div className="userbottomContainer">
                       <PhoneAndroid className="userShowIcon"/>
                       <span className="userShowInfoTitle">+632 759831</span>
                    </div>
                    <div className="userbottomContainer">
                       <MailOutline className="userShowIcon"/>
                       <span className="userShowInfoTitle">fgabayon@abayon.com</span>
                    </div>
                    <div className="userbottomContainer">
                       <LocationSearching className="userShowIcon"/>
                       <span className="userShowInfoTitle">Manila | Philippines</span>
                    </div>

                   </div>
               </div>
               <div className="userUpdate">
                   
                    <span className="userUpdateTitle">Update</span>
                   
                   
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    className="userInputUpdate"
                                    type="text"
                                    placeholder="fgbabayon"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    className="userInputUpdate"
                                    type="text"
                                    placeholder="Fg Abayon"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    className="userInputUpdate"
                                    type="number"
                                    placeholder="+632 759831"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    className="userInputUpdate"
                                    type="email"
                                    placeholder="fgbabayon"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    className="userInputUpdate"
                                    type="text"
                                    placeholder="Manila | Philippines"
                                />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImgUpload"
                                      src="https://images.pexels.com/photos/10341144/pexels-photo-10341144.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-10341144.jpg&fm=jpg"
                                />
                                 <label htmlFor="file"><Publish className="userUpdateIcon"/></label>   
                                 <input type="file" id="file" style={{ display: "none" }}/> 
                            </div>
                            <button className="userUpdateButton">User Update</button>
                        </div>

                    </form>    
               </div>
           </div>

        </div>
    )
}
