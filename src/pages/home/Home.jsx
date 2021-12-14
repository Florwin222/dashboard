import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../Dummydata';
import HomewidgetSmall from '../../components/homeWidgetSmall/HomewidgetSmall';
import HomewidgetLarge from '../../components/homeWidgetLarge/HomewidgetLarge';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid users="Active User" name="name"/>
            <div className="homewidgetsContainer">
                <HomewidgetSmall/>
                <HomewidgetLarge/>
            </div>
        </div>
    )
}
