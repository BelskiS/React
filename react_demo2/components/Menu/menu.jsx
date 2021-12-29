import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import style from './menu.module.scss';

function Menu() {
    return (
        <nav className={style.wrap}>
            <Dropdown className='site_dopdown_btn' align={{ lg: 'start' }}>
                <Dropdown.Toggle 
                    variant="success" id="mainMenu"
                    className={`${style.main_btn}`}
                    data-menu="main_menu">
                    <span className={`${style.main_btn_ico} color_ico icon-ion-menu-outline`}></span>
                    <span className="">Каталог товаров</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${style.garage_menu} dropdown_animate`} data-menu='dropdown'>
                    <div className="">место для меню каталога</div>
                </Dropdown.Menu>
            </Dropdown>

            <ul className={`ul_reset_style ${style.header_menu}`}>
                <li><a href="/about/" className={`site_link site_link_hover_other`}>О компании</a></li>
                <li><a href="/payment-and-delivery/" className={`site_link site_link_hover_other`}>Доставка и
                        оплата</a></li>
                <li><a href="/news/" className={`site_link site_link_hover_other`}>Новости</a></li>
                <li><a href="/actions/" className={`site_link site_link_hover_other`}>Акции</a></li>
                <li><a href="/contacts/" className={`site_link site_link_hover_other`}>Контакты</a></li>
            </ul>
        </nav>
    );
}

export default Menu;