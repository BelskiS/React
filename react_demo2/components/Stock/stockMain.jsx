import React from 'react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
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
                            <Link href="/actions/">
                                <a style={{ backgroundImage: 'url(' + 
                                    `${item.DETAIL_PICTURE ? item.DETAIL_PICTURE : ''}`
                                + ')' }}></a>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default StockMain;