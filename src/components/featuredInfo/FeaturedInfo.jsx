import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className ="featuredTitle">Revenue</span>
                    <diV className = "featuredMoneyContainer">
                        <span className="featuredMoney">$2,4</span>
                        <span className="featuredMoneyRate">$-11.4
                        <ArrowDownward className="featuredIcon negative"/>
                        </span>
                </diV>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className ="featuredTitle">Sales</span>
                    <diV className = "featuredMoneyContainer">
                        <span className="featuredMoney">$2,4</span>
                        <span className="featuredMoneyRate">$-11.4
                        <ArrowDownward className="featuredIcon negative"/>
                        </span>
                </diV>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className ="featuredTitle">Cost</span>
                    <diV className = "featuredMoneyContainer">
                        <span className="featuredMoney">$2,4</span>
                        <span className="featuredMoneyRate">$-11.4
                        <ArrowUpward className="featuredIcon"/>
                        </span>
                </diV>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>      
    )
}
