import React from 'react';

import Link from 'next/link';
import BtnSite from '@components/BtnSite/btnSite';

import style from './news.module.scss';

function NewsMain({ newsData }) {

    const getDateMonth = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
        };
        const dateRuFormat = new Date(date * 1000).toLocaleString("ru-RU", options);
        
        return dateRuFormat.split(' ').slice(1,3).join(' ');
    }

    return (
        <section className={`sec_main ${style.wrap_main_section}`}>
            <div className="site_container">
                <div className="title_h3">Наши новости</div>
                <div className={style.main_section}>
                    {newsData.slice(-3).map(item =>
                        <div className={style.main_item} key={item.ID}>
                            <div className={style.main_item_time}>
                                <div className={style.main_time_day}>
                                    {
                                        item.ACTIVE_FROM.split(' ')[0].split('.').slice(0,1)
                                    }
                                </div>
                                <div className={style.main_time_monthyear}>
                                    {
                                        getDateMonth(parseInt(item.DATE_CREATE_UNIX))
                                    }
                                </div>
                            </div>

                            <div className={style.main_item_descr}>
                                <Link href={`/${item.IBLOCK_TYPE_ID}/${item.CODE}`}>
                                    <a className="title_h5">{item.NAME}</a>
                                </Link>

                                <div className={style.main_descr_text}>
                                    {item.PREVIEW_TEXT}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={style.wrap_section_link_all}>
                        <BtnSite
                            btn_link
                            href="/news/"
                            className={`btn_site_border btn_site_white btn_site_arrowr ${style.section_link_all}`}
                            text="Посмотреть все новости"
                            icoName="icon-ion-chevron-right"
                            classNameText="arrowr_text"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsMain;