import React from 'react';

import Link from 'next/link';
import LinkIco from '@components/LinkIco/linkico';
import Image from 'next/image';
import style from './newsStocksList.module.scss';

function NewsStocksList({ dataNewsStock, stockList, detailData}) {
    dataNewsStock.sort((a, b) => b.ID - a.ID );

    const chooseDataNewsStock = () => {
        return detailData ? dataNewsStock.filter(item => item.ID != detailData).slice(0, 3) : dataNewsStock;
    }

    return (
        <>
            {chooseDataNewsStock().map(item =>
                <div className={style.items} key={item.ID}>
                    <div className={style.item}>
                
                        <div className={`
                            ${style.item_img}
                            ${stockList ? style.item_img_stock : style.item_img_news }
                        `}>
                            <Link href={`/${item.LIST_PAGE_URL.split('/').slice(1,2).join()}/${item.ID}`}>
                                <a>
                                    <Image 
                                        src={item.PREVIEW_PICTURE}
                                        alt=""
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={style.item_descr}>
                            <Link href={`/${item.LIST_PAGE_URL.split('/').slice(1,2).join()}/${item.ID}`}>
                                <a className="title_h4 site_link" data-newssale="title">{item.NAME}</a>
                            </Link>
                            
                            
                            {stockList ?
                                <>
                                    {
                                        Object.values(item.PROPERTY_VALUES).map((item_property) => {
                                            if(item_property.CODE == "VALIDITY") {
                                                return (
                                                    <div className={style.validity} key={item_property.ID}>
                                                        <span className={style.validity_title}>
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
                            : "" }

                            <div className={`
                                ${style.descr_text}
                                ${stockList ? style.descr_text_stock : style.descr_text_news }
                            `}>
                                {item.PREVIEW_TEXT}
                            </div>

                            {!stockList ?
                                <LinkIco
                                    href={`/${item.LIST_PAGE_URL.split('/').slice(1,2).join()}/${item.ID}`}
                                    icoName="icon-ion-chevron-right"
                                    siteLinkTwo
                                    classNameIco="arrow_ico"
                                    className="site_link_arrowr"
                                    text="Подробнее"
                                />
                            : "" } 
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default NewsStocksList;