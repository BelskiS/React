import React from 'react';

import Select from 'react-select';
import Input from '../../../Input/input';

import style from './headerSearch.module.scss'

function HeaderSearch() {
    const options = [
        { value: 'hs_val_vin', label: 'VIN-номер / артикул' },
        { value: 'hs_val_name', label: 'Название' }
      ]

    return (
        <>
            <div className={style.wrap_select}>
                <Select 
                    instanceId="headerSearchSelect"
                    className={`header_select wrap_select_site`} 
                    classNamePrefix="select_site"
                    defaultValue={options[0]}
                    options={options}
                    isSearchable={false} />
            </div>
            
            <form action="">
                <Input 
                    wrapClassName={style.site_field} 
                    className={style.input} 
                    type="text" 
                    placeholder="Поиск по VIN, артикулу" />
            </form>
            <button type="submit" className={`btn_site ${style.btn_search}`}>
                <span className={`${style.btn_search_ico} icon-ion-search`}></span>
            </button>
        </>
    );
}

export default HeaderSearch;