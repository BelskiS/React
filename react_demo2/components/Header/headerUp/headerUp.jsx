import React, { useState, useEffect } from 'react';
import Filial from '@components/Filial/filial';
import LinkPhone from '@components/LinkPhone/link';
import Dropdown from 'react-bootstrap/Dropdown';
import FormLoginReg from '@components/Forms/FormLoginReg/formLoginReg';

import menuPersonal from '@public/constData/linkpersonal';

import style from './headerUp.module.scss';
import ModalSite from '@components/Modal/modal';
import Link from 'next/link';
import BtnSite from '@components/BtnSite/btnSite';


function HeaderUp(props) {
    const [isLoginUser, setIsLoginUser] = useState(false);

    const setUserLogout = () => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
        const isUserLogin = getUsers && getUsers.find(item => item.isUserLogin == true);

        if(isUserLogin) {
            getUsers.forEach(item => {
                if(item.isUserLogin == true) {
                    item.isUserLogin = false
                }
            });
            localStorage.setItem("registrationUser", JSON.stringify(getUsers, null, 2));
            window.location.reload(true);
        }
    }
    useEffect(() => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
        const isUserLogin = getUsers && getUsers.find(item => item.isUserLogin == true);

        if(isUserLogin) {
            setIsLoginUser(true)
        } else {
            setIsLoginUser(false)
        }
    }, []);
    

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
                                className={`site_link_with_borderb link_header_request_call ${style.order_link}`}
                                textBtn="Заказать звонок"
                                modalTitle="Заказать звонок"
                                modalBtnText="Заказать звонок"
                                modalDescription="Оставьте свой номер телефона, и наш менеджер перезвонит вам в ближайшее время."
                                viewLink
                                fieldFirstName
                                fieldPhone
                            />
                        : ""}
                    </span>

                    <ModalSite
                        className={`header_link_help ${style.mod_inviz} ${style.link} ${style.help}`}
                        textBtn="Помощь клиенту"
                        modalTitle="Помощь специалиста"
                        modalBtnText="Отправить"
                        modalDescription="Отправьте сообщение с вашим вопросом. Мы постараемся вам помочь."
                        viewLink
                        icoName={`${style.link_ico} icon-ion-help-circle`}
                        fieldFirstName
                        fieldEmail
                        fieldTextarea
                    />                 
                </div>
                <div className={`for_static_login ${style.item} ${style.mob_headlogin}`}>
                    <div className="fix_login">
                        <Dropdown className={`site_dopdown_btn ${style.btnLogPers}`} align={{ lg: 'end' }}>
                            <Dropdown.Toggle 
                                variant="success"
                                id={isLoginUser ? 'headerLoginUser' : 'headerLogin'}
                                className={`${isLoginUser ? style.login_user : style.login}  site_link btn_none_backgr`} data-login="head_login"
                            >
                                {isLoginUser ? 
                                    'test@tes.ru'
                                :
                                    <>
                                        <span className={`${style.link_ico} color_ico icon-ion-enter-outline`}></span>Вход
                                    </>    
                                } 
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={`${style.login_dropdown} dropdown_animate`} data-hlogin={ isLoginUser ? 'login_user' : 'login'}>
                                {isLoginUser ?
                                    <ul className={style.personalarea}>
                                        {menuPersonal.map((link) => 
                                            <li data-ico={link.ico} key={link.id}>
                                                <Link href={link.url} >
                                                    <a>{link.title}</a>
                                                </Link>
                                            </li>
                                        )}
                                        <li data-ico="personalarea_exit" >
                                            <BtnSite
                                                className={style.logout}
                                                viewLink
                                                onClick={setUserLogout}
                                                text="Выйти"
                                            />
                                        </li>
                                    </ul>
                                : 
                                    <FormLoginReg 
                                        classLink={style.link_forget_password} 
                                        isLoginPage
                                        headerLogin
                                        classErrorAll={style.errorAll}
                                        classLinkWrapBtn={style.login_wrap_btn}
                                    />
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderUp;