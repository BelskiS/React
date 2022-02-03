import React, { useState } from 'react';

import style from './advantage.module.scss';

function AdvantageMain({widthDevice}) {
    const [isShowBlock, setIsShowBlock] = useState(false);
    const isshowblock = widthDevice <= 767;
    if(isshowblock !== isShowBlock) setIsShowBlock(isshowblock);

    return (
        <section className={`sec_main ${style.main}`}>
            <div className={`site_container 
                ${!isShowBlock ? "" : style.advantage_container}
            `}>
                <div className={style.wrap_main_item}>
                    <div className={style.main_item}>
                        <div className={style.main_item__text}>
                            <div className={`title_h2 ${style.main_item__text_title}`}>Сеть магазинов и автосервисов в Москве и Московской области</div>

                            <div className={style.main_item__text_descr}>Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.</div>
                        </div>

                        {!isShowBlock ? 
                            <div className={style.main_item__descr}>
                                <div className={`${style.main_item__descr_item} ${style.main_year}`}>
                                    14 лет на рынке автозапчастей
                                </div>
                                <div className={`${style.main_item__descr_item} ${style.main_shop}`}>
                                    10 магазинов и автосервисов
                                </div>
                                <div className={`${style.main_item__descr_item} ${style.main_product}`}>
                                    15 тыс. товаров в ассортименте
                                </div>
                            </div>
                        : ""}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdvantageMain;