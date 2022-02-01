import React, { useState } from 'react';

import style from './garage.module.scss';

function MainLinkGarage({widthDevice}) {
    const [isShowModel, setisShowModel] = useState(false);
    const isshowmodel = widthDevice <= 999;
    if(isshowmodel !== isShowModel) setisShowModel(isshowmodel);

    const [isShowIco, setisShowIco] = useState(false);
    const isshowico = widthDevice <= 520;
    if(isshowico !== isShowIco) setisShowIco(isshowico);

    const [isShowYear, setisShowYear] = useState(false);
    const isshowyear = widthDevice <= 440;
    if(isshowyear !== isShowYear) setisShowYear(isshowyear);

    return (
        <section className={style.main_page_selected_auto}>
            <div className="site_container">
                <div className={style.main_page_selected_auto__content}>
                    <div className={style.main_page_selected_auto__content_item}>
                        <div className={style.main_page_selected_auto__content_title}><span>Для более точного подбора выберите автомобиль.</span></div>

                        <a href="#modal_add_auto_new111" className={style.main_link_selected_auto} data-toggle="modal">
                            {!isShowIco ? 
                                <span className={`${style.main_link_selected_auto__ico} icon-ion-car-sport-sharp`}></span>
                            : ""}
                            <span className={style.main_link_selected_auto__wrap_item}>
                                <span className={`${style.main_link_selected_auto__item}`}>
                                    <span>Марка</span>
                                </span>

                                {!isShowYear ? 
                                    <span className={`${style.main_link_selected_auto__item}`}>
                                        <span>Год</span>
                                    </span>
                                : ""}

                                {!isShowModel ? 
                                    <span className={`${style.main_link_selected_auto__item}`}>
                                        <span>Модель</span>
                                    </span>
                                : ""}

                                <span className={`btn_site ${style.main_link_selected_auto__btn}`}>Выбрать</span>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MainLinkGarage;