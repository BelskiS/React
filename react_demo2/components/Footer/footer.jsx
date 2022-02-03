import React from 'react';

import FooterUp from './footerUp';
import FooterDown from './footerDown';
import ScrollUp from './ScrollUp/scrollUp';

import style from './footer.module.scss';

function Footer() {
    return (
        <footer className={style.wrap_main}>
            <div className="site_container">
                <FooterUp />
                <FooterDown />
            </div>

            <ScrollUp />
        </footer>
    );
};

export default Footer;