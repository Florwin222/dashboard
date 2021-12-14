import React from 'react'
import "./products.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline, DeleteOutlineOutlined } from '@material-ui/icons';
import { productRows } from "../../Dummydata";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Products() {

        const [data, setData] = useState(productRows);

        const handleDelete = (id) => {
            setData(data.filter((item) => item.id !==id));
        };

        const columns = [
            { field: "id", headerName: "ID", width: 90 },
            {
                field: "product",
                headerName: "Product",
                width: 200,
                renderCell: (params) => {
                    return (
                        <div className="productList">
                            <img className="productListImg" src={params.row.img} alt=""/>
                            {params.row.name}
                        </div>
                    );
                },
            },
            {   field: "price", 
                headerName: "Price", 
                width: 90 
            },
            {   field: "stock", 
                headerName: "Stock", 
                width: 90 
            },
            {   field: "status", 
                headerName: "Status", 
                width: 90, 
                renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                            </Link>
                            <DeleteOutline
                                className="productListDelete"
                                onClick={()=>handleDelete(params.row.id)}
                            />
                        </>
                    );
                },
            },

        ] 
    return ( 
        <div className="products">
             <DataGrid
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
        </div>
    )
}
