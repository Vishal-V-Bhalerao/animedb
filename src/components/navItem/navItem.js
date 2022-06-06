import React from "react";
import PropTypes from 'prop-types'
import './navItem.css'
import { useNavigate } from "react-router";
const NavItem = ({ children, path }) => {
    const navigate = useNavigate()
    function handleClick(){
        navigate(path)
    }
    return (
        <li onClick={handleClick} className="text-white flex items-center m-5 cursor-pointer" >
            {children}
        </li>
    )
}

NavItem.propTypes = {
    children: PropTypes.any
}
export default NavItem