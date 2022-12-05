
import React, { useState, useEffect } from 'react';
// import BlockIcoTitleDescr from '@components/BlockIcoTitleDescr/blockIcoTitleDescr';
import personalLink from '@public/constData/personalLink';
import FormPersonal from '@components/Forms/FormPersonal/formPersonal';

import style from './personalFilling.module.scss'


function PersonalFilling(props) {
    const [isLoginUser, setIsLoginUser] = useState(false);

    const getUserName = () => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
        const isUserLogin = getUsers && getUsers.find(item => item.isUserLogin == true);
        let userName;

        if(isUserLogin) {
            getUsers.forEach(item => {
                if(item.isUserLogin == true) {
                    userName = item.firstName
                }
            });
        }
        return userName;
    }

    useEffect(() => {
        const getUsers = JSON.parse(localStorage.getItem('registrationUser'));
        const isUserLogin = getUsers && getUsers.find(item => item.isUserLogin == true);

        if(isUserLogin) {
            setIsLoginUser(true);

        } else {
            setIsLoginUser(false);
        }
    }, []);

    return (
        <>
            {!isLoginUser ?
               <div className="">Авторизуйтесь или зарегистрируйтесь</div> 
            : 
                <>
                    {/* <BlockIcoTitleDescr
                        classBlock={style.block}
                        classIco={style.ico}
                        data_ico={"ico_profile"}
                        classWrapTitleDescr={style.classWrapTitleDescr}
                        classTitle={`title_h4 ${style.title}`}
                        classDescr={style.descr}
                        textTitle={getUserName()}
                        textDescr="Lorem ipsum."
                    /> */}

                    <div className={style.content}>
                        {props.isMyprofile ? 
                            <div className={style.cont_left}>
                                <FormPersonal />
                            </div>
                        : ''}

                        {/* <div className={`${props.isMyprofile ? style.cont_right : ''} ${style.list_block}`}>
                            {personalLink.map(item =>
                                <BlockIcoTitleDescr
                                    key={item.id}
                                    classBlock={style.block}
                                    classIco={style.ico}
                                    data_ico={item.ico}
                                    classWrapTitleDescr={style.classWrapTitleDescr}
                                    classTitle={style.title}
                                    classDescr={style.descr}
                                    textTitle={item.title}
                                    textDescr={item.descr}
                                    blockLink
                                    linkUrl={item.url}
                                />
                            )}
                        </div> */}
                    </div>  
                </>
            }
        </>
    );
}

export default PersonalFilling;