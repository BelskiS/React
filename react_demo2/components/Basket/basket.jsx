import React, { useState } from 'react';
import Link from "next/link";
import { CSSTransition } from 'react-transition-group';
import style from './basket.module.scss';

function Basket() {
    const [hover, setHover] = useState(false);
    
    return (
        <div 
            className={style.wrap}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link href="/auto/cart/">
                <a className={`site_link ${style.link_header}`}>
                    <span className={`${style.number_product} basket-count-update`}>
                        0
                    </span>

                    <span className={`${style.header_ico} color_ico icon-ion-cart`}></span>
                    Корзина
                </a>
            </Link>

            <CSSTransition 
                in={hover}
                timeout={200}
                unmountOnExit
            >
                <div className={`${style.wrap_header_dropdown}`}>
                    <div className={style.header_dropdown}>
                        месо для корзины
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Basket;