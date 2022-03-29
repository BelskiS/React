import React from 'react';

import style from './breadcrumbs.module.scss';

function BreadCrumbs() {
    return (
        <div className="wrap_site_breadcrumbs">
            <div className="site_container">
                {/* <div
                    className="site_breadcrumbs"
                    itemprop="http://schema.org/breadcrumb"
                    itemscope
                    itemtype="http://schema.org/BreadcrumbList"
                >
                    <div 
                        className="bx-breadcrumb-item"
                        itemprop="itemListElement"
                        itemscope
                        itemtype="http://schema.org/ListItem"
                    >

                        <a className="site_link" href="/" title="Главная страница" itemprop="item">
                            <span className="site_breadcrumbs__item" itemprop="name"><span className="breadcrumbs__main_ico color_ico icon-ion-home-outline">Главная страница</span></span>
                        </a>
                        <meta itemprop="position" content="1" />
                    </div>
                    <div 
                        className="bx-breadcrumb-item"
                        itemprop="itemListElement"
                        itemscope
                        itemtype="http://schema.org/ListItem"
                    >
                        <span className="site_breadcrumbs__item" itemprop="name">Скидки и акции</span>
                        <meta itemprop="position" content="2" />
                    </div>
                </div>   */}
            </div>
        </div>
    );
}

export default BreadCrumbs;