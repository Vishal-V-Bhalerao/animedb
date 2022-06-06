import React from "react";
import './baseSearch.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
export const BaseSearch = () => {
    const placeHolderText = "Search items, collections, and accounts"
    return (
        <div className="flex p-3 w-full rounded-lg search-input" >
            <div className="text-white px-3" >
                {/* <FontAwesomeIcon icon={faBell} ></FontAwesomeIcon> */}
            </div>
            <input className="search-input" placeholder={placeHolderText} ></input>
        </div>
    )
}