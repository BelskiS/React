import React from 'react';

import advantageMainPlus from '../../../public/constData/advantageMainPlus';

import style from './advantageMainPlus.module.scss';

function AdvantageMainPlus() {
    return (
        <section className={style.section}>
            <div className="site_container">
                <div className={style.content}>
                    {advantageMainPlus.map((item) => 
                        <div className={style.item} data-item={item.ico} key={item.id}>
                            {item.text} <br /> {item.textTwo}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default AdvantageMainPlus;