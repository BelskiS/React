import React, { useState } from 'react';

import BtnSite from '../../BtnSite/btnSite';

import style from './helpMain.module.scss';

function HelpMain({widthDevice}) {
    const [isMobContainer, setIsMobContainer] = useState(false);
    const ismobcontainer = widthDevice <= 767;
    if(ismobcontainer !== isMobContainer) setIsMobContainer(ismobcontainer);

    return (
        <section className={style.wrap_section}>
            <div className={`site_container
                ${!isMobContainer ? "" : style.section_container}
            `}>
                <div className={style.section}>
                    <div className={style.section_item}>
                        <div className={`title_h1 ${style.section_item__title}`}>Наши специалисты помогут вам</div>
                        <div className={style.section_item__descr}>
                            Обратитесь к нашим консультантам, и они помогут максимально точно и за короткий срок подобрать необходимые запчасти для вашего автомобиля
                        </div>

                        <BtnSite 
                            btn_link
                            href="/request_for_selection/"
                            className={style.section_btn}
                            classNameIco={style.section_btn__ico}
                            icoName="icon-ion-create-outline"
                            text="Запрос на подбор запчастей"
                         />
                    </div>
                </div>
            </div>
        </section>   
    );
}

export default HelpMain;