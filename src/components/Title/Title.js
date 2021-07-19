import React from 'react'
import './Title.css'
import {NavLink} from "react-router-dom";
import {Valute} from "../Valute/Valute";
import {Time} from "../Time/Time";

export function Title() {
    return(
        <div className="title">
            <div className="post-time">
                <Time />
            </div>

            <div className="article">
                <h1>News and Photos <br/> Applicaton</h1>
            </div>


            <div className="buttons">
                <NavLink to={'/test'}><div className="button-inTitle"><p>News</p></div></NavLink>
                <NavLink to={'/photo'}><div className="button-inTitle"><p>Photo</p></div></NavLink>
            </div>
        </div>
    )
}