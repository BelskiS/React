import React from 'react';

import styleHeaderUp from '../Header/headerUp/headerUp.module.scss';
import style from './filial.module.scss';

function Filial() {
    return(
        <div className={`${styleHeaderUp.link} ${style.adress_popup}`}>
            <div className={style.btn}>
                <span className={`${styleHeaderUp.link_ico} icon-ion-location-sharp`}></span>
                <span className={`site_link site_link_with_borderb ${style.header_title}`}>
                    Россия, Москва, Нагорный пр-д, 12 корпус 3 </span>
            </div>
        </div>
    );
}

export default Filial;