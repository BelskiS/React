import React, { useState } from 'react';

import SearchOrigionCatalog from '@components/SearchOrigionCatalog/searchOriginCatalog';
import Link from 'next/link';
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
                        <Link href={item.url} key={item.id}>
                            <a className={style.main_item} data-categories={item.class}>
                                <span className={style.main_item__img}>
                                    <img src={item.img} alt="" />
                                </span>
                                <span className={style.main_item__title}>{item.title}</span>
                            </a>
                        </Link>
                    )}

                    <div className={`${style.main_item} ${style.origin_c}`}>
                        <div className={style.origin_c__title}>Оригинальный каталог</div>
                        <div className={style.origin_c__descr}>Подбор автозапчастей в профессиональном каталоге</div>

                        {!isShowCategories ? 
                            <SearchOrigionCatalog />
                        : ""}
                        
                        <Link href="/">
                            <a className={`site_link site_link_with_borderb ${style.origin_c_btn}`}>Перейти в каталог</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;