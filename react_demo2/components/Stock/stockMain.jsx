import React from 'react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";

import style from './stock.module.scss';

function StockMain({stockData}) {
    return (
        <div className={`sec_main ${style.main_slider}`}>
            <div className="site_container">
                <div className="title_h3">Скидки и акции</div>
           
                <Swiper 
                    pagination={{
                        clickable: true
                    }} 
                    modules={[Pagination]}
                    className={`slider_site slider_site_dots ${style.slider}`}
                >
                    {stockData.slice(0,3).map(item => 
                        <SwiperSlide className={style.slider_item} key={item.ID}>
                            <Link href={`/${item.LIST_PAGE_URL.split('/').slice(1,2).join()}/`}>
                                <a>
                                    {item.DETAIL_PICTURE ?
                                        <Image 
                                            src={item.DETAIL_PICTURE}
                                            className={style.slider_img}
                                            alt=""
                                            width={1300}
                                            height={300}
                                        />
                                    : ''}
                                </a>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default StockMain;