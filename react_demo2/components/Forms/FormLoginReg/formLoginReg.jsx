import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';


function FormLoginReg(props) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '', rePassword: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Поле должно быть заполнено';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Неверный email';
        }

        if (!values.password) {
          errors.password = 'Поле должно быть заполнено';
        } else if (values.password.length < 6) {
          errors.password = 'Пароль не менее 6 символов';
        }

        if(!values.rePassword) {
          errors.rePassword = 'Поле должно быть заполнено';
        } else if (values.rePassword != values.password) {
          errors.rePassword = 'Неверное подтверждение пароля';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className="wrap_site_field site_field_with_label">
            <span className="site_field_label">E-mail:*</span>
            <div className={`site_field site_field_withico input_email 
              ${errors.email && touched.email ? 'site_field_error' : '' }
            `}>
              <Field type="email" name="email" placeholder="Введите ваш e-mail" />
            </div>
            <ErrorMessage name="email" component="div" className="site_field_error_text" />
          </div>

          {props.isLoginPage || props.isRegistrationPage ? 
            <>
              <div className={`wrap_site_field site_field_with_label 
                ${props.isLoginPage ? 'site_field_bottom_text' : ''}
              `}>
                <span className="site_field_label">Пароль:*</span>
                {props.isRegistrationPage ? 
                  <span className="site_field_label_text"> не менее 6 символов длиной.</span>
                : ""}
                <div className={`site_field site_field_withico input_password 
                  ${errors.password && touched.password ? 'site_field_error' : '' }
                `}>
                  <Field type={showPass ? 'text' : 'password'} name="password" className="password_inp" placeholder="Введите пароль" />
                  <span className={`link_input_password ${showPass ? 'viz_pass' : ''}`}
                    onClick={() => setShowPass(!showPass)}
                  ></span>
                </div>
                <ErrorMessage name="password" component="div" className="site_field_error_text" />

                {props.isLoginPage ? 
                  <Link href="/login/forgotPassword/">
                    <a className={`site_link site_link_with_borderb ${props.classLink}`} rel="nofollow">
                      Забыли свой пароль?
                    </a>
                  </Link>
                : ""}
              </div>

              {props.isRegistrationPage ? 
                <div className="wrap_site_field site_field_with_label">
                  <span className="site_field_label">Подтверждение пароля:*</span>
                  <div className={`site_field site_field_withico input_password 
                    ${errors.rePassword && touched.rePassword ? 'site_field_error' : '' }
                  `}>
                    <Field type={showPass ? 'text' : 'password'} name="rePassword" className="password_inp" placeholder="Введите пароль повторно" />
                    <span className={`link_input_password ${showPass ? 'viz_pass' : ''}`}
                      onClick={() => setShowPass(!showPass)}
                    ></span>
                  </div>
                  <ErrorMessage name="rePassword" component="div" className="site_field_error_text" />
                </div>
              : ""}
            </>
          : ""}

          <div className="site_field_btn">
            <button className="btn_site" type="submit" disabled={isSubmitting}>
              {props.isLoginPage ? 'Войти' 
              : props.isForgotPassword ? 'Восстановить'
              : 'Зарегистрироваться'}
              
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormLoginReg;