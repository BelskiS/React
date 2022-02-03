import React from 'react';

import Link from 'next/link';

import style from './footer.module.scss'

function FooterDown() {
    const today = new Date();

    return (
        <div className={style.copy}>
            <div className={style.copy_item}>
                <span>&copy; 2003 - {(today.getFullYear())} e-comEXPERT</span>
            </div>

            <Link href="https://e-comexpert.ru/">
                <a className={style.company_development} target="_blank" rel="nofollow noopener">
                    <span className={style.company_development_ico}></span>
                    <span className={style.company_development__text}>Разработка интернет-магазина — e-comEXPERT</span>
                </a>
            </Link>
        </div>
    );
};

export default FooterDown;