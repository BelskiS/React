import React from 'react';

import FooterUp from './footerUp';
import FooterDown from './footerDown';

import style from './footer.module.scss';

function Footer() {
    return (
        <footer className={style.wrap_main}>
            <div className="site_container">
                <FooterUp />
                <FooterDown />
            </div>
        </footer>
    );
};

export default Footer;