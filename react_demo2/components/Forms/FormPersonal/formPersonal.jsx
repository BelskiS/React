import React, { useState } from 'react';
import BtnSite from '@components/BtnSite/btnSite';
import FormEditPersonal from './formEditPersonal';
import style from './formPersonal.module.scss';


function FormPersonal(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [isFullEdit, setIsFullEdit] = useState(false);
    const [saveText, setSaveText] = useState(false);

    const handleClose = () => setIsEdit(false);
    const handleShowNotPas = () => setIsEdit(true);
    const handleShowWithPas = () => setIsFullEdit(true);
    const habdleShowSavetext = () => setSaveText(true)

    // const showTextSave = (saveText) => {
    //     setSaveText(saveText)
    // }

    const getCurrentUser = () => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
        const isUserLogin = getUsers && getUsers.find(item => item.isUserLogin == true);
        let currentUser;

        if(isUserLogin) {
            getUsers.forEach(item => {
                if(item.isUserLogin == true) {
                    currentUser = [item];
                }
            })
        }
        return currentUser;
    }

    return(
        <div className={style.content}>
            <div className={style.wrap_title_double}>
                <div className={`title_h5 ${style.title_double}`}>
                    {!isEdit ?
                        'Мой профиль'
                    : 'Изменение данных профиля'}
                </div>
                {!isEdit ? 
                    <BtnSite
                        viewLink
                        className={style.wrap_ico_withText}
                        classNameIco={style.ico_withText}
                        icoName="icon-ion-create"
                        classNameText="site_link"
                        text="Редактировать профиль"
                        onClick={handleShowNotPas}
                    />
                : ''}
            </div>
            {saveText ? 
                <div className={style.filled__saved}>
                    <p>Изменения сохранены</p>
                </div>
            : ''}

            
            {!isEdit ? 
                getCurrentUser().map(item => 
                    <div className={style.info} key={item.email}>
                        <div className={style.info_item}>
                            <div className={style.info_title}>Фамилия</div>
                            <div className={`${!item.lastName ? style.not_specified : ''} ${style.info_descr}`}>
                            {item.lastName ? item.lastName : "Не указано"}
                            </div>
                        </div>
                        <div className={style.info_item}>
                            <div className={style.info_title}>Имя</div>
                            <div className={style.info_descr}>{item.firstName}</div>
                        </div>
                        <div className={style.info_item}>
                            <div className={style.info_title}>E-Mail</div>
                            <div className={style.info_descr}>{item.email}</div>
                        </div>
                        <div className={style.info_item}>
                            <div className={style.info_title}>Телефон</div>
                            <div className={`${!item.phone ? style.not_specified : ''} ${style.info_descr}`}>
                                {item.phone ? item.phone : "Не указано"}
                            </div>
                        </div>
                        <div className={style.info_item}>
                            <div className={style.info_title}>Пароль</div>
                            <div className={style.info_descr}>
                                <BtnSite 
                                    viewLink
                                    className={style.wrap_ico_withText}
                                    classNameIco={style.ico_withText}
                                    icoName="icon-ion-lock-closed"
                                    classNameText="site_link site_link_with_borderb"
                                    text="Изменить пароль"
                                    onClick={() => {
                                        handleShowNotPas()
                                        handleShowWithPas()
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )            
            :   
                <div className={style.edit_form}>
                    <FormEditPersonal 
                        passSection={style.passwordSec}
                        btnSave={style.save_btn}
                        isFullEdit={isFullEdit}
                        btnClassName={style.wrap_ico_withText}
                        btnClassNameIco={style.ico_withText}
                        allError={style.all_error}
                        handleShowWithPas={handleShowWithPas}
                        handleClose={handleClose}
                        getCurrentUser={getCurrentUser()}
                        habdleShowSavetext={habdleShowSavetext}
                    />
                </div>
            }

            
            

        </div>
    );
}

export default FormPersonal;