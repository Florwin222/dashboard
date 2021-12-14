import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Navbar() {
    return(
        <div className = "navbar">
            <div className = "navbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">                   
                                <Language/>
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                                <Settings/>   
                    </div>
                        <img src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}