import React from 'react';

import Link from 'next/link';
import style from './menu.module.scss';

function MenuIemCatalog(props) {
    return (
        <>
          {props.linkItemCatalog.map((item) => 
            <div className={style.item} key={item.id}>
                {item.itemLevelOne.map((itemLevelOne) => 
                    <div className={style.item_block} key={itemLevelOne.title}>
                        <Link href={itemLevelOne.url}>
                            <a className={style.main_title}>
                                <span className={`${style.main_title_ico} ${itemLevelOne.ico}`}></span>
                                <span>{itemLevelOne.title}</span>
                            </a>
                        </Link>
                        {itemLevelOne.itemSubLevel && !props.mobmenu ? 
                            <ul className={style.collapse_ul}>
                                {itemLevelOne.itemSubLevel.map((itemSubLevel) => 
                                    <li key={itemSubLevel.title}>
                                        <Link href={itemSubLevel.url}>
                                            <a className={` ${itemSubLevel.allLink ? 
                                                `site_link_two site_link_with_borderb ${style.main_all_link}` 
                                                : `site_link ${style.main_link}`}`}>
                                                    {itemSubLevel.title}
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        : ""}
                    </div>
                )}
            </div>
          )} 
        </>
    )
}

export default MenuIemCatalog;