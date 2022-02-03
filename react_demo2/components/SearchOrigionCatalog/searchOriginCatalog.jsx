import React, { useState } from 'react';

import BtnSite from '@components/BtnSite/btnSite';

import style from './searchOriginCatalog.module.scss';

function SearchOrigionCatalog() {
    const [numberSelected, setNumberSelected] = useState(false);

    

    return (
        <div className={style.content}>
            <div className={style.content_radio}>
                <div className={`radio ${style.content_radio_item}`}>
                    <input type="radio" 
                        name="origincatalog_radio"
                        id="radioVin"
                        checked={!numberSelected}
                        onChange={() => setNumberSelected(!numberSelected)}
                    />
                    <label className="site_link" htmlFor="radioVin">
                        <span className={`radio_btn ${style.content_radio_btn}`}></span>
                        по VIN номеру
                    </label>
                </div>

                <div className={`radio ${style.content_radio_item}`}>
                    <input type="radio" 
                        name="origincatalog_radio"
                        id="radioNumber"
                        checked={numberSelected}
                        onChange={() => setNumberSelected(!numberSelected)}
                    />
                    <label className="site_link" htmlFor="radioNumber">
                        <span className={`radio_btn ${style.content_radio_btn}`}></span>
                        по номеру кузова
                    </label>
                </div>
            </div>
            <form action="" className={`site_field ${style.form}`}>

                {!numberSelected ? 
                    <input placeholder="Введите VIN автомобиля" name="vin" type="text" />
                : 
                    <div className={style.form_double_input}>
                        <input className={style.code_body} type="text" name="codeC" placeholder="код кузова" />
                        <span>-</span>
                        <input className={style.number_body} type="text" name="numberC" placeholder="номер кузова" />
                    </div>
                }

                <BtnSite 
                    href="/request_for_selection/"
                    className={style.form_btn}
                    text="Найти"
                    type="submit"
                />
            </form>
        </div>
    );
}

export default SearchOrigionCatalog;