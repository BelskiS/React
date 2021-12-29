import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import style from './garage.module.scss';

function Garage() {
    return (
        <div className={style.header}>
            <Dropdown className='site_dopdown_btn' align={{ lg: 'end' }}>
                <Dropdown.Toggle 
                    variant="success" id="headerGarage"
                    className={`site_link btn_none_backgr ${style.btn}`}
                    data-garage="garage">
                    <span className={`${style.btn_ico} color_ico icon-ion-car-sport-sharp`}></span>
                    Мой гараж
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${style.garage_menu} dropdown_animate`} data-garage='dropdown'>
                    <div className="">место для гаража</div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Garage;