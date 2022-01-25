import React, { useEffect, useRef } from 'react';
import Link from "next/link";

import Logo from '../../Logo/logo';
import HeaderSearch from './headerSearch/headerSearch';
import Garage from '../../Garage/garage';
import Basket from '../../Basket/basket';
import Menu from '../../Menu/menu';

import style from './headerDown.module.scss';

function HeaderDown(props) {
    return (
        <div className={style.content} data-fixhead={props.isShow ? "fixhead" : ''}>
            <div className={`site_container ${style.container}`} data-fixhead={props.isShow ? "fixhead" : ''}>
                <div className={`for_fix_menu ${style.item} ${style.up}`} data-fixhead={props.isShow ? "fixhead" : ''}>
                    {!props.isShow ?
                        <Logo pos_header name="Logo" />
                        : ""
                    }

                    <div className={`for_fix_header_link ${style.search}`}>
                        {!props.isHeadMobShow ?
                           <div className={style.selected_search}>
                                <HeaderSearch />
                            </div>
                        : 
                        <a className={`btn_site ${style.mob_btn_search}`} href="#modal_mob_search" data-toggle="modal">
                            <span className={`icon-ion-search`}></span>
                        </a>   
                        }
                    </div>

                    <div className={`for_fix_login ${style.basket_garage}`}>
                        <Garage />
                        <Basket isHeadMobShow={props.isHeadMobShow} />
                    </div>
                </div>

                <div className={`for_static_menu ${style.item} ${style.down}`} data-fixhead={props.isShow ? "fixhead" : ''}>
                    <Menu isHeadMobShow={props.isHeadMobShow} fixhead={(props.isShow || props.isHeadMobShow) ? true : false} />

                    {!props.isShow ?
                        <Link href="/request_for_selection/">
                            <a className={`btn_site btn_site_border btn_site_white ${style.link_service}`}>
                                <span className={`${style.link_service__ico} color_ico icon-ion-create-outline`}></span>
                                <span>Запрос на подбор запчастей</span>
                            </a>
                        </Link>
                    : ""}
                </div>
            </div>
        </div>
    );
}

export default HeaderDown;