import { Publish } from '@material-ui/icons';
import React from 'react'
import "./newproduct.css"

export default function NewProduct() {
    return (
        <div className="newproduct">

            <h1 className="newProductTitle">New Product</h1>


            <h4 className="">Image</h4>
            <label htmlFor="file"></label>   
                                 <input type="file" id="file" /> 

            
            <form className="newProductForm">
                <div className="newProductItem">
                    <label className="newUserLabelName" >Product</label>
                    <input className="newProductInput" type="text" placeholder="Apple Mac"></input>
                </div>

                <div className="newProductItem">
                    <label className="newUserLabelFullname">Stock</label>
                    <input className="newProductInput" type="text" placeholder="45"></input>
                </div>
               
                <div className="newProductItem">
                        <label>Active</label>
                        <select className="newProductSelect" name="active" id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                </div>
                
            </form>
            <button className="newProductButton">Create</button>
        </div>
    );
}
