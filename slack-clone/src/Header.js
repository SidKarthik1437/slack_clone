import React from 'react';
import './Header.css';
import { Avatar , Input } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header() {
    return (
        <div className="header">

            <div className="header__left">
                {/* Avatar for the logged in user */}
                    <Avatar
                        className="header__avatar"
                        alt='Sid Karthik'
                    />
                    
                {/* Time icon */}
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* Input */}
                <input placeholder="Search MEEE"/>
            </div>

            <div className="header__right">
                {/* Help icon */}
                <HelpOutlineIcon />
            </div>

        </div>
    )
}

export default Header
