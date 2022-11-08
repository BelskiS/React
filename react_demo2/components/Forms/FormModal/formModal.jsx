import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import BtnSite from '@components/BtnSite/btnSite';

function FormModal(props) {
    const PhoneMask = props => (
        <InputMask {...props} />
    );
    const FieldAgrChec = props => (
        <input {...props} />
    );
    
    return (
        <Formik
            initialValues={{ firstName: '', 
            email: '', 
            phone: '', 
            message: '', 
            agrCheck: true }}
            validate={values => {
                const errors = {};
                const isMask = values.phone.includes('_');

                if(props.fieldFirstName) {
                    if (!values.firstName) {
                        errors.firstName = 'Поле должно быть заполнено';
                    }
                }

                if(props.fieldPhone) {
                    if (!values.phone || isMask) {
                        errors.phone = 'Поле должно быть заполнено';
                    }
                }
                
                if(props.fieldEmail) {
                    if (!values.email) {
                        errors.email = 'Поле должно быть заполнено';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Неверный email';
                    }
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(JSON.stringify(values, null, 2));
                props.mdlClose();
                
                setSubmitting(false);
            }}
        >
        {({ isSubmitting, errors, touched, values }) => (
            
            <Form>
                {props.fieldFirstName ? 
                    <div className={`wrap_site_field ${props.fieldModal ? props.fieldModal : ''}`}>
                        <div className={`site_field site_field_withico input_name 
                        ${errors.firstName && touched.firstName ? 'site_field_error' : '' }
                        `}>
                        <Field type="text" name="firstName" placeholder="Введите ваше имя" />
                        </div>
                        <ErrorMessage name="firstName" component="div" className="site_field_error_text" />
                    </div>
                : ''}

                {props.fieldPhone ? 
                    <div className={`wrap_site_field ${props.fieldModal ? props.fieldModal : ''}`}>
                        <div className={`site_field site_field_withico input_phone 
                        ${errors.phone && touched.phone ? 'site_field_error' : '' }
                        `}>
                        <Field name="phone" as={PhoneMask} mask="+7 (999) 999-99-99" placeholder="Введите ваш номер телефона" />
                        </div>
                        <ErrorMessage name="phone" component="div" className="site_field_error_text" />
                    </div>
                : ''}

                {props.fieldEmail ?
                    <div className={`wrap_site_field ${props.fieldModal ? props.fieldModal : ''}`}>
                        <div className={`site_field site_field_withico input_email 
                        ${errors.email && touched.email ? 'site_field_error' : '' }
                        `}>
                        <Field type="email" name="email" placeholder="Введите ваш e-mail" />
                        </div>
                        <ErrorMessage name="email" component="div" className="site_field_error_text" />
                    </div>
                : ''}

                {props.fieldTextarea ? 
                    <div className={`wrap_site_field ${props.fieldModal ? props.fieldModal : ''}`}>
                        <div className={`site_field`}>
                        <Field as="textarea" placeholder="Введите ваше сообщение" name="message" />
                        </div>
                    </div>
                : ''}

                <div className={`site_field_btn ${props.fieldModal ? 'btn_modal' : ''}`}>
                    <BtnSite 
                        type="submit"
                        disabled={values.agrCheck ? isSubmitting : true}
                        text={props.modalBtnText}
                    />
                </div>

                <div className={`checkbox ${props.classAgreement_check}`}>
                    <Field name="agrCheck" as={FieldAgrChec} id="agreementModal" type="checkbox" />
                    <label htmlFor="agreementModal">
                        Нажимая кнопку «Заказать звонок», я даю свое согласие   на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных
                    </label>
                </div>
            </Form>
        )}
        </Formik>
    )
}

export default FormModal;