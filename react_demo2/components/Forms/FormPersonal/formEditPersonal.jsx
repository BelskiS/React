import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import BtnSite from '@components/BtnSite/btnSite';


function FormEditPersonal(props) {
  const [showPass, setShowPass] = useState(false);
  const [arrayUsers, setArrayUser] = useState([]);
  const [isUser, setIsUser] = useState(false);
 
  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem('registrationUser'));

    setArrayUser(getUsers || []);
  }, []);

  // const showTextSave = (saveText) => {
  //   props.showTextSave
  // }
  const PhoneMask = props => (
    <InputMask {...props} />
  );

  const getObjectCurrentUser = () => {
    let currentUser;
    props.getCurrentUser.forEach(item => {
      currentUser = item
    });
    return currentUser
  }
  const getInitialvalues = () => {
    return Object.assign(getObjectCurrentUser(), {
        password: '',
        rePassword: ''
      }
    );
  }


  return (
    <Formik
      initialValues={getInitialvalues()}
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

        if (!values.firstName) {
          errors.firstName = 'Поле должно быть заполнено';
        }

        if (!values.phone || isMask) {
          errors.phone = 'Поле должно быть заполнено';
        }

        if (0 < values.password.length && values.password.length < 6) {
          errors.password = 'Пароль не менее 6 символов';
        }

        if (values.rePassword != values.password) {
          errors.rePassword = 'Неверное подтверждение пароля';
        }


        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {       
        setTimeout(() => {
            
          
            if(arrayUsers.find(item => item.email == values.email && item.isUserLogin == false)) {
              setIsUser(true);
            } else {
              setIsUser(false);
              arrayUsers.forEach(item => {
                if(item.isUserLogin == true) {
                  return Object.assign(item, values, {
                    password: values.password ? values.password : item.password,
                    rePassword: values.rePassword ? values.rePassword : item.rePassword,
                  });
                }
              });

              localStorage.setItem("registrationUser", JSON.stringify(arrayUsers, null, 2));
              props.habdleShowSavetext();
              props.handleClose()
              // window.location.reload(true);
            }
        
          setSubmitting(false);
        }, 1400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          {isUser ? 
            <div className={`site_field_error_text ${props.allError}`}>
              Данный email уже существует
            </div>
          : ''}

          <div className="wrap_site_field site_field_with__horizontal_label">
              <span className="site_field_label">Фамилия</span>
              <div className={`site_field site_field_withico input_name`}>
                  <Field type="text" name="lastName" placeholder="Введите вашу фамилию" />
              </div>
          </div>

          <div className="wrap_site_field site_field_with__horizontal_label">
              <span className="site_field_label">Имя</span>
              <div className={`site_field site_field_withico input_name 
                  ${errors.firstName && touched.firstName ? 'site_field_error' : '' }
              `}>
                  <Field type="text" name="firstName" placeholder="Введите ваше имя" />
              </div>
              <ErrorMessage name="firstName" component="div" className="site_field_error_text" />
          </div>

          <div className="wrap_site_field site_field_with__horizontal_label">
              <span className="site_field_label">E-mail</span>
              <div className={`site_field site_field_withico input_email 
                  ${errors.email && touched.email ? 'site_field_error' : '' }
              `}>
                  <Field type="email" name="email" placeholder="Введите ваш e-mail" />
              </div>
              <ErrorMessage name="email" component="div" className="site_field_error_text" />
          </div>

          <div className={`wrap_site_field site_field_with__horizontal_label`}>
              <span className="site_field_label">Телефон</span>

              <div className={`site_field site_field_withico input_phone 
              ${errors.phone && touched.phone ? 'site_field_error' : '' }
              `}>
              <Field name="phone" as={PhoneMask} mask="+7 (999) 999-99-99" placeholder="Введите ваш номер телефона" />
              </div>
              <ErrorMessage name="phone" component="div" className="site_field_error_text" />
          </div>

          {props.isFullEdit ? 
            <div className={props.passSection ? props.passSection : ''}>
              <div className={`wrap_site_field site_field_with__horizontal_label`}>
                  <span className="site_field_label">Новый пароль</span>
                  <div className={`site_field site_field_withico input_password 
                      ${errors.password && touched.password ? 'site_field_error' : '' }
                  `}>
                      <Field type={showPass ? 'text' : 'password'} name="password" className="password_inp" placeholder="Введите пароль" />
                      <span className={`link_input_password ${showPass ? 'viz_pass' : ''}`}
                      onClick={() => setShowPass(!showPass)}
                      ></span>
                  </div>
                  <ErrorMessage name="password" component="div" className="site_field_error_text" />
              </div>

              <div className="wrap_site_field site_field_with__horizontal_label">
                  <span className="site_field_label">Подтверждение нового пароля</span>
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
            </div>            
          : 
            <div className={`wrap_site_field site_field_with__horizontal_label`}>
                <span className="site_field_label">Пароль</span>
                <BtnSite 
                  viewLink
                  className={props.btnClassName ? props.btnClassName : ''}
                  classNameIco={props.btnClassNameIco ? props.btnClassNameIco : ''}
                  icoName="icon-ion-lock-closed"
                  classNameText="site_link site_link_with_borderb"
                  text="Изменить пароль"
                  onClick={props.handleShowWithPas}
                  type='button'
                />
            </div>
          }

          <div className={`site_field_btn 
            ${props.btnSave ? props.btnSave : ''}
          `}>
              <button className="btn_site" type="submit" disabled={isSubmitting}>
                  Сохранить
              </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormEditPersonal;