import React from 'react';

import Link from 'next/link';
import LinkIco from '@components/LinkIco/linkico';
import Image from 'next/image';
import style from './newsStocksList.module.scss';

function NewsStocksList({stockList}) {
    return (
        <div className={style.items}>
            <div className={style.item}>
        
                <div className={`
                    ${style.item_img}
                    ${stockList ? style.item_img_stock : style.item_img_news }
                `}>
                    <Link href="/news/222/">
                        <a>
                            <Image 
                                src="https://nalivaika.docker.e-comexpert.ru/bitrix/templates/e-comexpert_v2/img/none_img.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>
                </div>
                <div className={style.item_descr}>
                    <Link href="/news/222/">
                        <a className="title_h4 site_link" data-newssale="title">Ford Vs Ferrari</a>
                    </Link>
                    
                    
                    {stockList ?
                        <div className={style.validity}>
                            <span className={style.validity_title}>Срок действия:</span>
                            <span className={style.validity_time}>12.09.2019</span>
                        </div>
                    : "" }

                    <div className={`
                        ${style.descr_text}
                        ${stockList ? style.descr_text_stock : style.descr_text_news }
                    `}>
                        Кэрролл Шелби и Кен Майлз и их команда создали гоночный автомобиль, который впоследствии завоевал знаменитый титул Ле-Мана у Ferrari, гигант производительности, который выигрывал знаменитую гонку шесть лет подряд.
                    </div>

                    {!stockList ?
                        <LinkIco
                            href="/news/222/"
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
    );
}

export default NewsStocksList;