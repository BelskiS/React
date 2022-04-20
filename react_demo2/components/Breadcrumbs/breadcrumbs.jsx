import React from 'react';

import Link from 'next/link';
import style from './breadcrumbs.module.scss';

function BreadCrumbs(props) {
    const arrLinkBreadcrumbs = props.pathLink.split('/');

    return (
        <div className={style.wrap_block}>
            <div className="site_container">
                <div
                    className={style.block}
                    itemProp="http://schema.org/breadcrumb"
                    itemScope
                    itemType="http://schema.org/BreadcrumbList"
                >
                    {arrLinkBreadcrumbs.map((item_bread, index_bread) => 
                        <div 
                            className={style.wrap_item}
                            itemProp="itemListElement"
                            itemScope
                            itemType="http://schema.org/ListItem"
                            key={item_bread + index_bread}
                        >
                            {
                                index_bread == 0 ? 
                                    <Link href="/">
                                        <a className="site_link" title="Главная страница" itemProp="item">
                                            <span className={style.item} itemProp="name"><span className={`color_ico icon-ion-home-outline ${style.main_ico}`}>Главная страница</span></span>
                                        </a>
                                    </Link>
                                : index_bread == (arrLinkBreadcrumbs.length - 1) ?
                                    <span className={style.item} itemProp="name">
                                        {props.titleLink}
                                    </span>
                                : 
                                    <Link href={`/${item_bread}/`}>
                                        <a className="site_link" title={props.titleParent} itemProp="item">
                                            <span className={style.item} itemProp="name">{props.titleParent}</span>
                                        </a>
                                    </Link>
                            }
                            
                            <meta itemProp="position" content={index_bread + 1} />
                        </div>
                    )}
                </div>  
            </div>
        </div>
    );
}

export default BreadCrumbs;