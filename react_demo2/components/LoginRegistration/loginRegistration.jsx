import React, { useState, useEffect } from 'react';

import FormLoginReg from '@components/Forms/FormLoginReg/formLoginReg';
import Link from 'next/link';

import style from './loginRegistration.module.scss';

function LoginRegistration(props) {
    const [isLoginUser, setIsLoginUser] = useState(false);

    useEffect(() => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));

        if(getUsers && getUsers.find(item => item.isUserLogin)) {
            setIsLoginUser(true)
        } else {
            setIsLoginUser(false)
        }
    }, []);


    return (
        <div className="site_container">
            <div className={style.login_reg_page}>
                <div className={style.login_reg_page__item}>
                    <h1 className="title_h1">{props.titlePage}</h1>
                    {isLoginUser ?
                        props.registrationPage ?
                            <div className="">Вы зарегистрированы на сервере и успешно авторизованы.</div>
                        : ""
                    : 
                        <div className={style.login_reg_page__form}>
                            {props.forgotPassword ? 
                                <>
                                    <div className={`title_h5 ${style.forgot_pass_title}`}>Забыли пароль?</div>
                                    <div className={style.descr_text}>Вы можете восстановить потерянные данные, 
                                    используя форму ниже. Введите адрес электронной почты, связанный с вашей учетной записью. Информация о регистрационных данных будет отправлена вам в ближайшее время.</div>
                                </>
                            : ""}

                            <FormLoginReg 
                                classLink={style.link_forget_password} 
                                isLoginPage={props.loginPage ? true : false}
                                isRegistrationPage={props.registrationPage ? true : false}
                                isForgotPassword={props.forgotPassword ? true : false}
                            />

                            <div className={style.authorize__not_created}>
                                <span>
                                    { props.loginPage ? 
                                        'Еще не зарегистрированы?'
                                        : props.registrationPage ? 
                                        'Уже есть учетная запись?'  
                                        : 'Вспомнили пароль?'
                                    }
                                    </span>
                                <Link href={props.loginPage ? '/login/registration/' : '/login/'}>
                                    <a className="site_link site_link_with_borderb" rel="nofollow">
                                        { props.loginPage ? 
                                            'Зарегистрироваться'
                                            : props.registrationPage ? 
                                            'Войти' 
                                            : 'Авторизоваться'
                                        }
                                        
                                    </a>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginRegistration;