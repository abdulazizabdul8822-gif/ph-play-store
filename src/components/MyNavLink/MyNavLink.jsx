import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, className, children}) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) =>
                ` font-semibold pb-2 ${className} ${isActive ? " text-purple-500 border-b border-purple-500" : ""}`
            }
            >{children}</NavLink >
        </div>
    );
};

export default MyNavLink;

// this is a reusable NavLink
