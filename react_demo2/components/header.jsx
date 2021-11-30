import React from 'react';

function Header() {
    return (
        <header className="site_header">
            <div className="site_header__up">
                <div className="site_container">
                    <div className="site_header__up__item item_with_adress_popup">
                        <div id="W247BranchChangeConttbIj2z">
                            <div className="site_header__up_link site_header__adress_popup">
                                <div className="btn_adress_popup">
                                    <span className="site_header__up_link_ico icon-ion-location-sharp"></span>
                                    <span className="site_link site_link_with_borderb site_header__adress_popup__title">
                                        Россия, Москва, Нагорный пр-д, 12 корпус 3 </span>
                                </div>
                            </div>

                        </div>

                        <span className="site_header__up_link wrap_header_tel">
                            <a href="tel:+74992882015" className="site_link header_tel branch_tel"><span
                                    className="site_header__up_link_ico icon-ion-call"></span>+7(499)2882015</a>
                            <a href="#request_call" className="site_link site_link_with_borderb link_header_request_call"
                                data-toggle="modal">Заказать звонок</a>
                        </span>
                        <span className="for_fixed_header_help">
                            <a className="site_link site_header__up_link header_link_help" href="#help" data-toggle="modal">
                                <span className="site_header__up_link_ico icon-ion-help-circle"></span>
                                <span className="header_link_help__title">Помощь клиенту</span>
                            </a>
                        </span>


                    </div>
                    <div className="site_header__up__item wrap_for_fixed_header_login_basket">
                        <div className="for_fixed_header_login_basket">

                            <div className="wrap_header_login">
                                <div className="header_login site_dopdown_btn">
                                    <div className="dropdown noclose">
                                        <button className="btn site_link dropdown-toggle login_btn" type="button"
                                            data-toggle="dropdown">
                                            <span className="site_header__up__ico color_ico icon-ion-enter-outline"></span>
                                            Вход </button>
                                        <div className="dropdown-menu">
                                            <form name="system_auth_form6zOYVN" method="post" target="_top" action="/?login=yes"
                                                className="auth-form">
                                                <input type="hidden" name="backurl" value="/" />
                                                <input type="hidden" name="AUTH_FORM" value="Y" />
                                                <input type="hidden" name="TYPE" value="AUTH" />
                                                <div className="error-container"></div>
                                                <div className="wrap_site_field site_field_with_label">
                                                    <label className="site_field_label" for="USER_LOGIN">E-mail*</label>
                                                    <div className="site_field site_field_withico input_email">
                                                        <input type="text" className="" id="loginhead_reg1" name="USER_LOGIN"
                                                            maxlength="50" value="" size="17" placeholder="Введите E-mail" />
                                                    </div>
                                                </div>
                                                <div className="wrap_site_field site_field_bottom_text site_field_with_label">
                                                    <label className="site_field_label" for="USER_PASSWORD">Пароль*</label>
                                                    <div className="site_field site_field_withico input_password">
                                                        <input type="password" name="USER_PASSWORD" id="passwordhead_reg1"
                                                            className="" placeholder="Введите пароль" maxlength="50" size="17"
                                                            autocomplete="off" />
                                                    </div>
                                                    <a href="/login/?forgot_password=yes"
                                                        className="site_link site_link_with_borderb forget_pass">Забыли свой
                                                        пароль?</a>
                                                </div>
                                                <div className="site_field_btn">
                                                    <input type="submit" className="btn_site gradient_top" name="Login"
                                                        value="Войти" />
                                                    <a href="/login/register/"
                                                        className="site_link site_link_with_borderb">Регистрация</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site_header__down">
                <div className="site_container">
                    <div className="site_header__down__item_up">
                        <a className="link_logo" href="/">
                            <img src="/bitrix/templates/e-comexpert_v2/img/Logo.svg" alt="Logo" />
                        </a>

                        <div className="header_search serach_selected_head">
                            <div className="main_search search_selected_head">
                                <div className="wrap_selectpicker_site select_header_search set_val">
                                    <div className="dropdown bootstrap-select bs3">
                                        <select name="" className="selectpicker"
                                            tabindex="-98">
                                            <option data-value="hs_val_vin" value="hs_val_vin" selected="">VIN-номер / артикул
                                            </option>
                                            <option data-value="hs_val_name" value="hs_val_name">Название</option>
                                        </select>
                                        <button type="button" className="btn dropdown-toggle btn-default"
                                            data-toggle="dropdown" role="button" title="VIN-номер / артикул">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">VIN-номер / артикул</div>
                                                </div>
                                            </div><span className="bs-caret"><span className="caret"></span></span>
                                        </button>
                                        <div className="dropdown-menu open" role="combobox">
                                            <div className="inner open" role="listbox" aria-expanded="false" tabindex="-1">
                                                <ul className="dropdown-menu inner "></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap_form_header_search hs_val_vin " style={{display: "block"}}>
                                    <form className="form_main_search sag_search_form" action="/">
                                        <div className="site_field">
                                            <input type="text" className="sag_search" placeholder="Поиск по VIN, артикулу" />
                                        </div>
                                        <button type="submit" className="btn btn_site btn_search">
                                            <span className="btn_search__ico icon-ion-search"></span></button>
                                    </form>
                                </div>

                                <div className="wrap_form_header_search hs_val_name" style={{display: "none"}}>
                                    <div id="title-search" className="header_wrap_title_search">
                                        <form action="/search/index.php" className="form_main_search sag_search_form_name">
                                            <div className="site_field">
                                                <input id="title-search-input" type="text" name="q" value="" className="sag_search"
                                                    placeholder="Поиск по названию" size="40" maxlength="50" autocomplete="off" />
                                            </div>
                                            <button name="s" type="submit" className="btn btn_site gradient_right btn_search">
                                                <span className="btn_search__ico icon-ion-search"></span> </button>
                                        </form>
                                        <div className="title-search-result"></div>
                                    </div>
                                </div>

                                <a className="mob_viz btn_site link_modal_mob_header_search" href="#modal_mob_search"
                                    data-toggle="modal"><span className="btn_search__ico icon-ion-search"></span></a>
                            </div>
                        </div>
                        <div className="header_basket_garage_btn">
                            <div className="for_fixed__garage_help">


                                <div id="w247_garage_new111" className="wrap_garage site_dopdown_btn">
                                    <div id="w247_garage_box_new111" className="dropdown noclose">


                                        <button className="btn dropdown-toggle btn_garage auto_in_garage" type="button"
                                            data-toggle="dropdown">
                                            <span className="btn_garage_ico color_ico icon-ion-car-sport-sharp"></span>
                                            <span className="garage_number_auto">2</span>
                                            Мой гараж </button>

                                        <div className="dropdown-menu select_garage"></div>
                                    </div>
                                    <div className="close_garage"><span className="icon-ion-close"></span></div>
                                    <div className="mob_fon_main_garage"></div>
                                </div>

                                <div id="bx_basketFKauiI" className="wrap_link_header_basket bx-basket bx-opener">
                                    <a href="/auto/cart/" className="site_link link_header_basket in_basket">
                                        <span className="basket_number_product basket-count-update   hide">0</span>

                                        <span className="site_header__up__ico color_ico icon-ion-cart"></span>
                                        Корзина
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site_header__down__item_down">
                        <div className="for_fixed__main_menu">
                            <nav className="wrap_main_menu">
                                <div className="main_menu site_dopdown_btn">
                                </div>

                                <ul className="ul_reset_style header_menu">
                                    <li><a href="/about/" className="site_link site_link_hover_other ">О компании</a></li>
                                    <li><a href="/payment-and-delivery/" className="site_link site_link_hover_other ">Доставка и
                                            оплата</a></li>
                                    <li><a href="/news/" className="site_link site_link_hover_other ">Новости</a></li>
                                    <li><a href="/actions/" className="site_link site_link_hover_other ">Акции</a></li>
                                    <li><a href="/contacts/" className="site_link site_link_hover_other ">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                        <a href="/request_for_selection/" className="btn_site btn_site_border btn_site_white link_service">
                            <span className="link_service__ico color_ico icon-ion-create-outline"></span>
                            <span>Запрос на подбор запчастей</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;