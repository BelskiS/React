import React from 'react';
import FormLoginReg from '@components/Forms/FormLoginReg/formLoginReg';
import Link from 'next/link';

import style from './loginRegistration.module.scss';

function LoginRegistration(props) {
    return (
        <div className="site_container">
            <div className={style.login_reg_page}>
                <div className={style.login_reg_page__item}>
                    <h1 className="title_h1">{props.titlePage}</h1>
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

                        {props.loginPage ?  
                            <div className={style.authorize__not_created}>
                                <span>Еще не зарегистрированы?</span>
                                <Link href="/login/registration/">
                                    <a className="site_link site_link_with_borderb" rel="nofollow">
                                        Зарегистрироваться
                                    </a>
                                </Link>
                            </div>
                        : ""}

                        {props.forgotPassword ? 
                            <div className={style.authorize__not_created}>
                                <span>Вспомнили пароль?</span>
                                <Link href="/login/">
                                    <a className="site_link site_link_with_borderb" rel="nofollow">
                                    Авторизоваться
                                    </a>
                                </Link>
                            </div>
                        : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegistration;