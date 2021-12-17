import React from 'react';

function Garage() {
    return (
        <div className="wrap_garage site_dopdown_btn">
            <div className="dropdown noclose">
                <button className="btn dropdown-toggle btn_garage auto_in_garage" type="button"
                    data-toggle="dropdown">
                    <span className="btn_garage_ico color_ico icon-ion-car-sport-sharp"></span>
                    Мой гараж </button>
                <div className="dropdown-menu select_garage" style={{display: "none"}}></div>
            </div>
        </div>
    );
};

export default Garage;