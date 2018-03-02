import React from 'react';
const sideMenuStyle = {
    'position': 'absolute',
    'right': '10px'
};
const SideMenu = () => {
    return(
        <ul style = {sideMenuStyle}>
            <li>
                Home
            </li>
            <li>
                Program
            </li>
            <li>
                Gallary
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    );
};
export default SideMenu;