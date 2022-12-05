import React, { useState } from 'react';

import SearchOrigionCatalog from '@components/SearchOrigionCatalog/searchOriginCatalog';
import Link from 'next/link';
import Image from 'next/image';

import style from './categories.module.scss';

function Categories(props) {
    const [isShowCategories, setIsShowCategories] = useState(false);
    const isshowcategories = props.widthDevice <= 1359;
    if(isshowcategories !== isShowCategories) setIsShowCategories(isshowcategories);
    
    return (
        <section className={style.main}>
            <div className="site_container">
                <div className={style.main_content}>
                    {props.linkCategories[0].itemsLink.map((item) => 
                        <Link href={item.url} key={item.id} className={style.main_item} data-categories={item.class}>
                            <span className={style.main_item__img}>
                                <Image 
                                    src={item.img}
                                    alt=""
                                    sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                    fill
                                />
                            </span>
                            <span className={style.main_item__title}>{item.title}</span>
                        </Link>
                    )}

                    <div className={`${style.main_item} ${style.origin_c}`}>
                        <div className={style.origin_c__title}>Оригинальный каталог</div>
                        <div className={style.origin_c__descr}>Подбор автозапчастей в профессиональном каталоге</div>

                        {!isShowCategories ? 
                            <SearchOrigionCatalog />
                        : ""}
                        
                        <Link href="/" className={`site_link site_link_with_borderb ${style.origin_c_btn}`}>
                            Перейти в каталог
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;