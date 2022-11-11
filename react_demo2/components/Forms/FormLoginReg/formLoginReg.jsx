import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import Link from 'next/link';


function FormLoginReg(props) {
  const [showPass, setShowPass] = useState(false);
  const [arrayUsers, setArrayUser] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [isCorrectValue, setIsCorrectValue] = useState(false);

  const addArrayUser = (user) => arrayUsers.push(user) && setArrayUser(arrayUsers);
  
  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
 
    setArrayUser(getUsers || []);
  }, []);
  

  const PhoneMask = props => (
    <InputMask {...props} />
  );

  const setUserlogin = () => props.isRegistrationPage ? true : false;

  return (
    <Formik
      initialValues={{ 
        firstName: '',
        email: '',
        phone: '',
        password: '',
        rePassword: '',
        isUserLogin: setUserlogin() 
      }}
      validate={values => {
        const errors = {};
        const isMask = values.phone.includes('_');

        if (!values.email) {
          errors.email = 'Поле должно быть заполнено';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Неверный email';
        }

        if(props.isRegistrationPage) {
          if (!values.firstName) {
            errors.firstName = 'Поле должно быть заполнено';
          }

          if (!values.phone || isMask) {
            errors.phone = 'Поле должно быть заполнено';
          }
        }

        if(props.isLoginPage || props.isRegistrationPage) {
          if (!values.password) {
            errors.password = 'Поле должно быть заполнено';
          } else if (values.password.length < 6) {
            errors.password = 'Пароль не менее 6 символов';
          }
        }

        if(props.isRegistrationPage) {
          if(!values.rePassword) {
            errors.rePassword = 'Поле должно быть заполнено';
          } else if (values.rePassword != values.password) {
            errors.rePassword = 'Неверное подтверждение пароля';
          }
        }


        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {       
        setTimeout(() => {

          if(props.isRegistrationPage) {
            if(arrayUsers.find(item => item.email == values.email)) {
              setIsUser(true);
            } else {
              setIsUser(false);
              addArrayUser(values);
              localStorage.setItem("registrationUser", JSON.stringify(arrayUsers, null, 2));
              window.location.reload(true);
            }
          } else if(props.isLoginPage) {
            if(arrayUsers.find(item => item.email == values.email && item.password == values.password)) {
              arrayUsers.forEach(item => {
                if(item.isUserLogin == false) {
                  item.isUserLogin = true;
                }
                window.location.assign('/');
              });
              localStorage.setItem("registrationUser", JSON.stringify(arrayUsers, null, 2));
            } else {
              setIsCorrectValue(true);
              
            }
          } else {
            console.log(JSON.stringify(values, null, 2));
          }
        
          setSubmitting(false);
        }, 1400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          {isUser || isCorrectValue ? 
            <div className={`site_field_error_text
              ${props.headerLogin ? props.classErrorAll : ''}
            `}>
              {isUser ? 
                'Данный email уже существует' 
              : 
                'Неверно введен логин или пароль'
              }
            </div>
          : ''}

          {props.isRegistrationPage ? 
            <div className="wrap_site_field site_field_with_label">
              <span className="site_field_label">Имя:*</span>
              <div className={`site_field site_field_withico input_name 
                ${errors.firstName && touched.firstName ? 'site_field_error' : '' }
              `}>
                <Field type="text" name="firstName" placeholder="Введите ваше имя" />
              </div>
              <ErrorMessage name="firstName" component="div" className="site_field_error_text" />
            </div>
          : ''}

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
              {props.isRegistrationPage ? 
                <div className={`wrap_site_field site_field_with_label`}>
                  <span className="site_field_label">Телефон:</span>
  
                  <div className={`site_field site_field_withico input_phone 
                    ${errors.phone && touched.phone ? 'site_field_error' : '' }
                  `}>
                    <Field name="phone" as={PhoneMask} mask="+7 (999) 999-99-99" placeholder="Введите ваш номер телефона" />
                  </div>
                  <ErrorMessage name="phone" component="div" className="site_field_error_text" />
                </div>
              : ''}

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

          <div className={`site_field_btn 
            ${props.headerLogin ? props.classLinkWrapBtn : ''}
          `}>
            <button className="btn_site" type="submit" disabled={isSubmitting}>
              {props.isLoginPage ? 'Войти' 
              : props.isForgotPassword ? 'Восстановить'
              : 'Зарегистрироваться'}
            </button>
            {props.headerLogin ? 
              <Link href="/login/registration/">
                <a className="site_link site_link_with_borderb" rel="nofollow">Регистрация</a>
              </Link>
            : ""}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormLoginReg;