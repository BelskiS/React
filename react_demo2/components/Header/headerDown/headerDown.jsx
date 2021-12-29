import React from 'react';
import Link from "next/link";

import Logo from '../../Logo/logo';
import HeaderSearch from './headerSearch/headerSearch';
import Garage from '../../Garage/garage';
import Basket from '../../Basket/basket';
import Menu from '../../Menu/menu';

import style from './headerDown.module.scss';

function HeaderDown() {
    return (
        <div className={style.content}>
            <div className={`site_container ${style.container}`}>
                <div className={`${style.item} ${style.up}`}>
                    <Logo pos_header name="Logo" />

                    <div className={style.search}>
                        <div className={style.selected_search}>
                            <HeaderSearch />
                        </div>
                    </div>

                    <div className={style.basket_garage}>
                        <Garage />
                        <Basket />
                    </div>
                </div>

                <div className={`${style.item}`}>
                    <Menu />

                    <Link href="/request_for_selection/">
                        <a className={`btn_site btn_site_border btn_site_white ${style.link_service}`}>
                            <span className={`${style.link_service__ico} color_ico icon-ion-create-outline`}></span>
                            <span>Запрос на подбор запчастей</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderDown;