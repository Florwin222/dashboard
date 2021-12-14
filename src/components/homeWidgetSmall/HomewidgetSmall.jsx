import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./homewidgetSmall.css"

export default function HomewidgetSmall() {
    return (
        <div className="homewidgetSmall">
           <span className="widgetsmallTitle">New Joiners</span>
           <ul className="joiners">
               <li className="joinersList">
                <img className="widgetsmallImg"
                    src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="widgetsmallUser">
                    <span className="widgetsmallTitle">FG Abayon</span>
                    <span className="widgetsmallPosition">Web Developer</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="visibilityIcon"/> Display
                </button>
                
               </li>
           </ul>

 
           <ul className="joiners">
               <li className="joinersList">
                <img className="widgetsmallImg"
                    src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="widgetsmallUser">
                    <span className="widgetsmallTitle"> FG Abayon</span>
                    <span className="widgetsmallPosition"> Web Developer</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="visibilityIcon"/>
                        Display
                </button>
               </li>
           </ul>

           <ul className="joiners">
               <li className="joinersList">
                <img className="widgetsmallImg"
                    src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="widgetsmallUser">
                    <span className="widgetsmallTitle"> FG Abayon</span>
                    <span className="widgetsmallPosition"> Web Developer</span>
                </div>
                <button className="widgetsmallButton">
               
                <Visibility className="visibilityIcon"/>  Display
                </button>
               </li>
           </ul>

           <ul className="joiners">
               <li className="joinersList">
                <img className="widgetsmallImg"
                    src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="widgetsmallUser">
                    <span className="widgetsmallTitle"> FG Abayon</span>
                    <span className="widgetsmallPosition"> Web Developer</span>
                </div>
                <button className="widgetsmallButton">
               
                <Visibility className="visibilityIcon"/>  Display
                </button>
               </li>
           </ul>

           <ul className="joiners">
               <li className="joinersList">
                <img className="widgetsmallImg"
                    src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="widgetsmallUser">
                    <span className="widgetsmallTitle"> FG Abayon</span>
                    <span className="widgetsmallPosition"> Web Developer</span>
                </div>
                <button className="widgetsmallButton">
               
                <Visibility className="visibilityIcon"/>  Display
                </button>
               </li>
           </ul>
        </div>

        
        
    )
}
