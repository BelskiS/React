import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

import linkItem from '@public/constData/linkItem';
import linkItemCatalog from '@public/constData/linkitemcatalog';
import MenuItem from './menuItem';
import MenuIemCatalog from './menuItemCatalog';

import style from './menu.module.scss';
import ModalSite from '@components/Modal/modal';

function Menu(props) {
    const [show, setShow] = useState(false);

    return (
        <nav className={`fix_menu ${style.wrap}`}>
            <Dropdown className='site_dopdown_btn' align={{ lg: 'start' }}
                show={show}
                onToggle={(nextShow) => {
                    setShow(nextShow)
                    if(nextShow) {
                        document.querySelector('body').classList.add('mob_body_overflow');
                    } else {
                        document.querySelector('body').classList.remove('mob_body_overflow');
                    }
                }}
            >
                <Dropdown.Toggle
                    variant="success" id="mainMenu"
                    className={`${style.main_btn}`}
                    data-menu="main_menu"
                    >
                    <span className={`${style.main_btn_ico} color_ico icon-ion-menu-outline`}></span>
                        {!props.fixhead ?
                            <span className="">Каталог товаров</span>
                        : ""}
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${style.garage_menu} dropdown_animate`} data-menu='dropdown' >
                    {props.isHeadMobShow ?
                        <> 
                            <div className={style.mob_header}>
                                <div className={style.mob_header_item}>
                                    <Link href="/contacts/">
                                        <a className={style.mob_header_adress}>
                                            <span className={`${style.mob_header__ico} icon-ion-location-sharp`}></span>
                                            <span className={`site_link site_link_with_borderb
                                                ${style.mob_header__text} ${style.mob_header_adress__text}`}>
                                                    Россия, Москва, Нагорный пр-д, 12 корпус 3
                                            </span>
                                        </a>
                                    </Link>
                                </div>

                                <ModalSite
                                    className={`header_link_help ${style.mob_header__help}`}
                                    textBtn="Помощь"
                                    modalTitle="Помощь специалиста"
                                    modalBtnText="Отправить"
                                    modalDescription="Отправьте сообщение с вашим вопросом. Мы постараемся вам помочь."
                                    viewLink
                                    classNameText="mob_header__help_text"
                                    icoName={`${style.mob_header__ico} icon-ion-help-circle`}
                                    fieldFirstName
                                    fieldEmail
                                    fieldTextarea
                                /> 
                                {/* <a className={`site_link ${style.mob_header__help}`} href="#help" data-toggle="modal">
                                    <span className={`${style.mob_header__ico} icon-ion-help-circle`}></span>
                                    <span className={style.mob_header__help_text}>Помощь</span>
                                </a> */}
                            </div>

                            <div className={style.mob_title}>Каталог товаров</div>
                        </>
                    : ""}

                    <div className={style.wrap_drop}>
                        <MenuIemCatalog 
                            linkItemCatalog={linkItemCatalog} 
                            mobmenu={props.isHeadMobShow ? true : false}
                        />
                    </div>

                    {props.isHeadMobShow ? 
                        <div className={style.mob_footer}>
                            <ul className={`ul_reset_style ${style.mob_footer_ul}`}>
                                <MenuItem linkItem={linkItem} />
                            </ul>
                        </div>
                    : ""}
                </Dropdown.Menu>
            </Dropdown>

            {props.isHeadMobShow ?
                <>
                    <div className={style.mob_close} data-mobmenu={show ? "menu" : ""}>
                        <span className="icon-ion-close"></span>
                    </div>
                    <div className={style.mob_fon} data-mobmenu={show ? "menu" : ""}></div>
                </>
            : ""}


            {!props.fixhead ?
                <ul className={`ul_reset_style ${style.header_site}`}>
                    <MenuItem linkItem={linkItem} />
                </ul>
                : ""
            }
        </nav>
    );
}

export default Menu;