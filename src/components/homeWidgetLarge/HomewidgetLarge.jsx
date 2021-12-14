import React from 'react'
import "./homewidgetLarge.css"


export default function HomewidgetLarge() {

    const Button = ({type}) =>{
        return <button className={"widgetlgButton " + type}>{type}</button>
    }

    return (
        <div className="homewidgetLarge">
            <h3 className="widgetlargeTitle">  Latest Transaction</h3>
            <table className="widgetlgTable">
                <tr className="widgetlgTr">
                    <th className="widgetlgTh">Customer</th>
                    <th className="widgetlgTh">Date</th>
                    <th className="widgetlgTh">Amount</th>
                    <th className="widgetlgTh">Status</th>
                </tr>
                <tr className="widgetlgTr">
                    <td className="widgetlgcont">
                        <img className="widgetlgUser" src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" "></img>
                        <span className="widgetlgName">FG Abayon</span>
                    </td>
                    <td className="widgetlgDate">May 1, 2021</td>
                    <td className="widgetlgCharge">$10000</td>
                    <td className="widgetlgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetlgTr">
                    <td className="widgetlgcont">
                        <img className="widgetlgUser" src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" "></img>
                        <span className="widgetlgName">FG Abayon</span>
                    </td>
                    <td className="widgetlgDate">May 1, 2021</td>
                    <td className="widgetlgCharge">$10000</td>
                    <td className="widgetlgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>

                <tr className="widgetlgTr">
                    <td className="widgetlgcont">
                        <img className="widgetlgUser" src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" "></img>
                        <span className="widgetlgName">FG Abayon</span>
                    </td>
                    <td className="widgetlgDate">May 1, 2021</td>
                    <td className="widgetlgCharge">$10000</td>
                    <td className="widgetlgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetlgTr">
                    <td className="widgetlgcont">
                        <img className="widgetlgUser" src="https://images.pexels.com/photos/10012578/pexels-photo-10012578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" "></img>
                        <span className="widgetlgName">FG Abayon</span>
                    </td>
                    <td className="widgetlgDate">May 1, 2021</td>
                    <td className="widgetlgCharge">$10000</td>
                    <td className="widgetlgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
            </table>
        </div>
        
    )
}
