import React from 'react';
import Filial from '@components/Filial/filial';
import LinkPhone from '@components/LinkPhone/link';
import Dropdown from 'react-bootstrap/Dropdown';
import FormLoginReg from '@components/Forms/FormLoginReg/formLoginReg';

import style from './headerUp.module.scss';
import ModalSite from '@components/Modal/modal';


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
                            <ModalSite
                                className="site_link_with_borderb link_header_request_call"
                                textBtn="Заказать звонок"
                                modalTitle="Заказать звонок"
                                modalBtnText="Заказать звонок"
                                modalDescription="Оставьте свой номер телефона, и наш менеджер перезвонит вам в ближайшее время."
                                modalLink
                                fieldFirstName
                                fieldPhone
                            />
                        : ""}
                    </span>

                    <ModalSite
                        className={`header_link_help ${style.mod_inviz}`}
                        textBtn="Помощь клиенту"
                        modalTitle="Помощь специалиста"
                        modalBtnText="Отправить"
                        modalDescription="Отправьте сообщение с вашим вопросом. Мы постараемся вам помочь."
                        modalLink
                        icoName={`${style.link_ico} icon-ion-help-circle`}
                        fieldFirstName
                        fieldPhone
                        // fieldEmail
                        // fieldTextarea
                    />                 
                </div>
                <div className={`for_static_login ${style.item} ${style.mob_headlogin}`}>
                    <div className="fix_login">
                        <Dropdown className='site_dopdown_btn' align={{ lg: 'end' }}>
                            <Dropdown.Toggle variant="success" id="headerLogin" className={`${style.login} site_link btn_none_backgr`} data-login="head_login">
                                <span className={`${style.link_ico} color_ico icon-ion-enter-outline`}></span>Вход
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={`${style.login_dropdown} dropdown_animate`} data-hlogin='login'>
                                <div className="">
                                <FormLoginReg 
                                    classLink={style.link_forget_password} 
                                    isLoginPage
                                    headerLogin
                                    classLinkWrapBtn={style.login_wrap_btn}
                                />
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderUp;