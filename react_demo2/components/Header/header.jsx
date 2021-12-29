import React from 'react';
import HeaderUp from './headerUp/headerUp';
import HeaderDown from './headerDown/headerDown';

import style from './header.module.scss';

function Header() {
    return (
        <header className="site_header">
            <HeaderUp />

            <HeaderDown />
        </header>
    );
}

export default Header;