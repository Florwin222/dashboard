import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, SupervisedUserCircle, Adb  } from "@material-ui/icons";
import { Link } from 'react-router-dom';



export default function SideBar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <div className ="sidebarMenu">
                    <h3 className ="sidebarTitle">Dashboard</h3>  
                        <ul className="sidebarList">
                        <Link className="links" to="/">
                            <li className = "sidebarlistItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                            </Link>
                            <li className = "sidebarlistItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className = "sidebarlistItem">
                                <TrendingUp/>
                                Sales
                            </li>
                        </ul>
                </div> 
                <div className ="sidebarMenu">      
                     <h3 className ="sidebarTitle">Quick Menu</h3> 
                        <ul className="sidebarList">
                                <Link className="links" to="/userlist">
                                    <li className = "sidebarlistItem">
                                        <SupervisedUserCircle className="sidebarIcon"/>
                                        Users
                                    </li>
                                
                                </Link>
                                <Link className="links" to="/products">
                            <li className = "sidebarlistItem">
                                <Adb className="sidebarIcon"/>
                                Products
                            </li>
                            </Link>
                            <li className = "sidebarlistItem">
                                <TrendingUp className ="sidebarIcon"/>
                                Transaction
                            </li>
                            <li className = "sidebarlistItem">
                                <TrendingUp className="sidebarIcon"/>
                                Reports
                            </li>
                    
                        </ul>
                </div>  
                <div className ="sidebarMenu">      
                     <h3 className ="sidebarTitle">Notifications</h3> 
                        <ul className="sidebarList">
                            <li className = "sidebarlistItem">
                                <LineStyle className="sidebarIcon"/>
                                Mail
                            </li>
                            <li className = "sidebarlistItem">
                                <Timeline className="sidebarIcon"/>
                                Feedback
                            </li>
                            <li className = "sidebarlistItem">
                                <TrendingUp className="sidebarIcon"/>
                                Messages
                            </li>
                    
                        </ul>
                </div> 
                <div className ="sidebarMenu">      
                     <h3 className ="sidebarTitle">Staff</h3> 
                        <ul className="sidebarList">
                            <li className = "sidebarlistItem">
                                <LineStyle className="sidebarIcon"/>
                                Manage
                            </li>
                            <li className = "sidebarlistItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className = "sidebarlistItem">
                                <TrendingUp className="sidebarIcon"/>
                                Reports
                            </li>
                    
                        </ul>
                </div>
            </div>
        </div>
    )
}


