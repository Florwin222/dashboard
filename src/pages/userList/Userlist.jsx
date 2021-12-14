import React from 'react'
import "./userlist.css"
import { DataGrid, GRID_COLUMN_HEADER_TITLE_CSS_CLASS } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from "../../Dummydata";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Userlist() {
    const [data, setdata] = useState(userRows);
    const handleDelete = (id) => {
        setdata(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {   field: 'username', 
            headerName: 'Username', 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="userListAvatar">
                        <img className="userListAvatarContainer" src ={params.row.avatar} alt="user" />
                        {params.row.username}
                    </div>
                );
            },     
    },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        { field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return(
            <>
            <Link to={"/user/ " + params.row.id}>
            <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteOutline 
                className="userlistDelete" 
                onClick={()=>handleDelete(params.row.id)}/>
            </>
            )
        } 
     },
      ]
      
      
    return (
        <div className="userList">
              
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
             
        </div>
    )
}
