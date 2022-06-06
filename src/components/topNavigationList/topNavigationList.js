import React from "react";
import NavItem from "../navItem/navItem";
// import { faUser, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './topNavigationList.css'
const navList = [
    {
        name: 'Trending',
        path: '/list/Trending'
    },
    {
        name: 'Top Rated',
        path: '/list/Top'
    },
    {
        name: 'Popular',
        path: '/list/Popular'
    }
]
export const TopNavigationList = () => {
    return (
        <ul className="flex">
            <div className="flex h-full" >
                {navList.map((item) => <NavItem key={item.name} path={item.path} > <a className="navigation-item nav-text" >{item.name.toUpperCase()}</a> </NavItem>)}
            </div>
            <div className="flex h-full" >
                {/* <NavItem> <FontAwesomeIcon className="text-white navigation-item text-xl" icon={faUser}></FontAwesomeIcon> </NavItem>
                <NavItem><FontAwesomeIcon className="text-white navigation-item text-xl" icon={faCartArrowDown}></FontAwesomeIcon> </NavItem> */}
            </div>
        </ul>
    )
}