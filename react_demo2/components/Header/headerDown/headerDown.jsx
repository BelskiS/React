import React, { useEffect, useRef } from 'react';

import Logo from '@components/Logo/logo';
import HeaderSearch from './headerSearch/headerSearch';
import Garage from '@components/Garage/garage';
import Basket from '@components/Basket/basket';
import Menu from '@components/Menu/menu';
import BtnSite from '@components/BtnSite/btnSite';

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
                        <BtnSite 
                            btn_link
                            href="/request_for_selection/"
                            className={`btn_site_border btn_site_white ${style.link_service}`}
                            classNameIco={`${style.link_service__ico} color_ico`}
                            icoName="icon-ion-create-outline"
                            text="Запрос на подбор запчастей"
                        />
                    : ""}
                </div>
            </div>
        </div>
    );
}

export default HeaderDown;