import { Link } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom";
 import { Publish } from '@material-ui/icons'
import React from 'react'
import Chart from '../../components/chart/Chart'
import { productData }  from '../../Dummydata'
import "./item.css"


export default function Item() {
    return (
        <div className="item">
            <div className="itemContainer">
                <h1 className="itemTitle">Products</h1>
                    <Link to='/newItem'>
                        <button className="itemAddButton" type="button">Create</button>
                    </Link>
            </div>
            <div className="itemTop">

                <div className="itemTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" name="name" users="Sales" />
                </div>

                <div className="itemTopRight">
                    <div className="itemInfoTop">
                        <img className="itemInfoImg" 
                        src="https://images.pexels.com/photos/10415754/pexels-photo-10415754.jpeg?cs=srgb&dl=pexels-cottonbro-10415754.jpg&fm=jpg" 
                        alt=""
                        />
                        <span className="itemName">Apple Airpods</span>
                    </div>
                    <div className="itemInfobottom">
                        <div className="itemInfo">
                            <span className="itemInfoKey">id:</span>
                            <span className="itemInfoValue">123</span>
                        </div>

                        <div className="itemInfo">
                            <span className="itemInfoKey">sales:</span>
                            <span className="itemInfoValue">5123</span>
                        </div>

                        <div className="itemInfo">
                            <span className="itemInfoKey">active:</span>
                            <span className="itemInfoValue">yes</span>
                        </div>

                        <div className="itemInfo">
                            <span className="itemInfoKey">in stock:</span>
                            <span className="itemInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="itemBottom">
                <form action="" className="itemForm">
                    <div className="itemFormLeft">
                        
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod"></input>
                        
                        <label>In Stock</label>
                        <select name="InStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="Active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="itemFormRight">
                        <div className="itemUpload">
                            <img src="https://images.pexels.com/photos/10415754/pexels-photo-10415754.jpeg?cs=srgb&dl=pexels-cottonbro-10415754.jpg&fm=jpg" 
                            alt="" className="itemUploadImg"/>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="itemButton">Update</button>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}
