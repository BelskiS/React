import React from 'react';

import Logo from '../Logo/logo';
import Link from 'next/link';
import LinkPhone from '../LinkPhone/link';
import LinkIco from '../LinkIco/linkico';
import linksoc from '../../public/constData/linksoc';
import linkfooter from '../../public/constData/linkfooter';
import MenuItem from '../Menu/menuItem';
import style from './footer.module.scss';

function FooterUp(props) {
    return (
        <div className={style.main}>
            <div className={`${style.item} ${style.item_one}`}>
                <div className={style.soc_title}>Присоединяйтесь к нам</div>
                <div className={style.soc}>
                    {linksoc.map((item) => 
                        <Link href={item.url} key={item.id}>
                            <a target="_blank" rel="nofollow noopener">
                                <span className={`${style.soc_ico} ${item.ico}`}></span>
                            </a>
                        </Link>
                    )}
                </div>

                <Logo pos_footer />
            </div>

            <div className={style.item}>
                <ul className="ul_reset_style">
                    <MenuItem linkItem={linkfooter[0].footerOne} />
                </ul>
            </div>

            <div className={`${style.item} ${style.item_three}`}>
                <ul className="ul_reset_style">
                    <MenuItem linkItem={linkfooter[0].footerTwo} />
                </ul>
            </div>

            <div className={`${style.item} ${style.wrap_contact}`}>
                <ul className={`ul_reset_style ${style.contact}`}>
                    <li>
                        <LinkPhone
                            className={`${style.phone} ${style.contact_item_link}`}
                            classNameIco={style.link_ico}
                            tel="+7(499)2882015"
                            icoName="icon-ion-call-outline"
                        />
                    </li>
                    <li>
                        <LinkIco
                            className={style.contact_item}
                            classNameIco={style.link_ico}
                            classNameText={style.contact_item_text}
                            href="/contacts/"
                            icoName="icon-ion-location-outline"
                            text="Россия, Москва, Нагорный пр-д, 12 корпус 3"
                        />
                    </li>
                    <li>
                        <LinkIco
                            className={style.contact_item}
                            classNameIco={style.link_ico}
                            mailto="info@e-comexpert.ru"
                            icoName="icon-ion-mail-outline"
                            classNameText={style.contact_item_link}
                        />
                    </li>
                    <li className={style.work_time}>
                        <span className={`${style.link_ico} icon-ion-time-outline`}></span>
                        <span className={style.contact_item_text}>Пн-Пт: 9-20Сб, Вс: выходной</span>
                    </li>
                </ul>
            </div>           
        </div>
    );
};

export default FooterUp;