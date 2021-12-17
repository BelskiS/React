import React from 'react';

function Basket() {
    return (
        <div className="wrap_link_header_basket bx-basket bx-opener">
            <a href="/auto/cart/" className="site_link link_header_basket in_basket">
                <span className="basket_number_product basket-count-update" style={{display: "none"}}>0</span>

                <span className="site_header__up__ico color_ico icon-ion-cart"></span>
                Корзина
            </a>
        </div>
    );
};

export default Basket;