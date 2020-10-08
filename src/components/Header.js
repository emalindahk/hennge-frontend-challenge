import React from 'react';
import '../stylesheets/Header.css';
import { ReactComponent as SearchIcon } from '../icons/icon_search.svg';

function Header() {
    return (
        <div class="header">
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
        </div>
    )
}

export default Header
