import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, name, data, users, grid}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
              <LineChart data={data}>
                  <XAxis dataKey={name} stroke="red"/>
                  <Line type="monotone" stroke= "#5550bd" dataKey={users} />
                    <Tooltip/>
                    {grid &&<CartesianGrid stroke="lightgray" strokeDasharray="5 5"/>}
                    <Legend/>
              </LineChart>
            </ResponsiveContainer>
           
        </div>
    );
} 
