import React from "react";

import Head from "@components/head";

import AdvantageMain from "@components/Main/AdvantageMain/advantage";
import MainLinkGarage from "@components/Garage/mainLinkGarage";
import Categories from "@components/Main/CategoriesMain/categories";
import HelpMain from "@components/Main/HelpMain/helpMain";
import AdvantageMainPlus from "@components/Main/AdvantageMainPlus/advantageMainPlus";
import linkCategories from '@public/constData/linkCategories';

function HomePage({widthDevice}) {
    return (
        <>
            <Head />
            
            <AdvantageMain widthDevice={widthDevice} />

            <MainLinkGarage widthDevice={widthDevice} />

            <Categories linkCategories={linkCategories} widthDevice={widthDevice} />

            <div className="sec_main main_slider_stock">
                <div className="site_container">
                    <div className="title_h3">Скидки и акции</div>
                место для слайдера скидок и акций
                </div>
            </div>

            <HelpMain widthDevice={widthDevice} />

            <AdvantageMainPlus />

            <div className="sec_main wrap_main_news">
                <div className="site_container">
                    <div className="title_h3">Наши новости</div>
                место для секции наши новости
                </div>
            </div>

            <div className="sec_main main_slider__brand">
                <div className="site_container">
                    <div className="title_h3">Наши партнеры</div>
                место для слайдера наши партнеры
                </div>
            </div>

            <div className="sec_main main_comments">
                <div className="site_container">
                    <div className="title_h3">Отзывы</div>
                место для слайдера отзывы
                </div>
            </div>

            <div className="main_chain_stores">
                <div className="site_container">
                    <div className="title_h3">Контакты сети магазинов “e-comAutoparts”</div>
                место для секции филиалов
                </div>
            </div>
        </>
    )
}

export default HomePage;