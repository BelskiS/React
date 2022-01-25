import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import style from './menu.module.scss';

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
                    <div className="">место для меню каталога</div>
                    {show ? "активня" : "неактивная"}
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
                    <li><a href="/about/" className={`site_link site_link_hover_other`}>О компании</a></li>
                    <li><a href="/payment-and-delivery/" className={`site_link site_link_hover_other`}>Доставка и
                            оплата</a></li>
                    <li><a href="/news/" className={`site_link site_link_hover_other`}>Новости</a></li>
                    <li><a href="/actions/" className={`site_link site_link_hover_other`}>Акции</a></li>
                    <li><a href="/contacts/" className={`site_link site_link_hover_other`}>Контакты</a></li>
                </ul>
                : ""
            }
        </nav>
    );
}

export default Menu;