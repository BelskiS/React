import React from 'react';

import Image from 'next/image';
import {decode} from 'html-entities';
import parse from 'html-react-parser';
import NewsStocksList from '@components/NewsStocksList/newsStocksList';
import BtnSite from '@components/BtnSite/btnSite';

import style from './newsStockDetail.module.scss';

function NewsStockDetail({dataDetail, dataDetailFull, StockDetailsList, stockList, titleParent}) {
    const makeLowTiile = () => {
        return titleParent.toLowerCase();
    }

    const getDateMonth = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
        };
        const dateRuFormat = new Date(date * 1000).toLocaleString("ru-RU", options);
        
        return dateRuFormat.split(' ').slice(1,2).join(' ');
    }

    return (
        <div className={style.wrap}>
            <div className={style.title}>
                {
                    dataDetail[0].DETAIL_PICTURE ? 
                        <div className={style.title_img}>
                            <Image
                                src={dataDetail[0].DETAIL_PICTURE}
                                alt=""
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                                fill
                            />
                        </div>
                    : ""
                }

                <div className={`
                    ${!StockDetailsList ? 
                        style.news_detail
                        : ""
                    }
                    ${style.wrap_title_text}`}
                >
                    <div className={style.title_text}>
                        {dataDetail[0].NAME}
                    </div>
                    {!StockDetailsList ?
                        <div className={style.title_news_time}>
                            <div className={style.title_news_day}>
                                {
                                    dataDetail[0].ACTIVE_FROM.split(' ')[0].split('.').slice(0,1)
                                }
                            </div>
                            <div className={style.title_news_monthyear}>
                                {`
                                    ${ getDateMonth(parseInt(dataDetail[0].ACTIVE_FROM_UNIX)) }

                                    ${ dataDetail[0].ACTIVE_FROM.split(' ')[0].split('.').slice(-1) }
                                `}
                            </div>
                        </div>
                    :
                        <>
                            {
                                Object.values(dataDetail[0].PROPERTY_VALUES).map((item_property) => {
                                    if(item_property.CODE == "VALIDITY") {
                                        return (
                                            <div className={style.title_validity} key={item_property.ID}>
                                                <span className={`title_h4 ${style.validity_title}`}>
                                                    {item_property.NAME}
                                                </span>
                                                <span className={style.validity_time}>
                                                    {item_property.VALUE.n0}
                                                </span>
                                        </div>
                                        )
                                        
                                    }
                                })
                            }
                        </>
                    }
                </div>
            </div>
            <div className={style.text}>
                { parse(decode(dataDetail[0].DETAIL_TEXT)) }
            </div>
            
            <div className={style.other}>
                <div className={`title_h3 ${style.other_title}`}>
                    {`Другие  ${makeLowTiile()}`}
                </div>

                <div className={style.wrap_other_item}>
                    <NewsStocksList 
                        dataNewsStock={dataDetailFull}
                        detailData={dataDetail[0].ID}
                        stockList />
                </div>

                <div className={style.wrap_detail_link_all}>
                    <BtnSite 
                        btn_link
                        href={`/${dataDetail[0].LIST_PAGE_URL.split('/').slice(1,2).join()}`}
                        className={`btn_site_border btn_site_white btn_site_arrowr ${style.detail_link_all}`}
                        text={`Посмотреть все ${makeLowTiile()}`}
                        icoName="icon-ion-chevron-right"
                        classNameText="arrowr_text"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsStockDetail;