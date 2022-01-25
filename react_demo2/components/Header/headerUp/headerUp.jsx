import React from 'react';
import Filial from '../../Filial/filial';
import LinkPhone from '../../LinkPhone/link';
import Dropdown from 'react-bootstrap/Dropdown';

import style from './headerUp.module.scss';

function HeaderUp(props) {
    return (
        <div className={style.content}>
            <div className={`site_container ${style.container}`}>
                <div className={`for_static_header_link ${style.item} ${style.adress_popup}`}>
                    {!props.isHeadMobShow ?
                        <Filial />
                    : ""}

                    <span className={style.link}>
                        <LinkPhone
                            className={style.phone}
                            classNameIco={style.link_ico}
                            tel="+7(499)2882015"
                            icoName="icon-ion-call"
                        />
                        {!props.isHeadMobShow ?
                            <a href="#request_call" className="site_link site_link_with_borderb link_header_request_call"
                            data-toggle="modal">Заказать звонок</a>
                            : ""}
                    </span>

                    <a className={`site_link ${style.link} header_link_help`} href="#help" data-toggle="modal" data-mobviz="inviz">
                        <span className={`${style.link_ico} icon-ion-help-circle`}></span>
                        <span className="header_link_help__title">Помощь клиенту</span>
                    </a>                   
                </div>
                <div className={`for_static_login ${style.item} ${style.mob_headlogin}`}>
                    <div className="fix_login">
                        <Dropdown className='site_dopdown_btn' align={{ lg: 'end' }}>
                            <Dropdown.Toggle variant="success" id="headerLogin" className={`${style.login} site_link btn_none_backgr`} data-login="head_login">
                                <span class={`${style.link_ico} color_ico icon-ion-enter-outline`}></span>Вход
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={`${style.login_dropdown} dropdown_animate`} data-hlogin='login'>
                                <div className="">место для формы авторизации</div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderUp;