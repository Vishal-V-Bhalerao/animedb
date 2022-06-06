import React from "react";
import './topNavigationPanel.css'
import { BaseSearch } from "../baseSearch/baseSearch";
import { TopNavigationList } from "../topNavigationList/topNavigationList";
import { useNavigate } from "react-router";
export const TopNavigationPanel = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
    return (
        <div className="nav-container" >
            <div className=" flex w-100 sticky top-0 primary-top-navigation justify-between">
                <div onClick={handleClick} className="flex text-xl items-center logo" > <h1 className=" text-white">ANIME DB</h1> </div>
                {/* <div className="flex items-center w-1/3" > <BaseSearch></BaseSearch> </div> */}
                <div className="flex "><TopNavigationList></TopNavigationList></div>
            </div>
        </div>
    )
}