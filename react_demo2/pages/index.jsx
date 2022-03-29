import React from "react";

import Head from "@components/head";

import AdvantageMain from "@components/Main/AdvantageMain/advantage";
import MainLinkGarage from "@components/Garage/mainLinkGarage";
import Categories from "@components/Main/CategoriesMain/categories";
import HelpMain from "@components/Main/HelpMain/helpMain";
import AdvantageMainPlus from "@components/Main/AdvantageMainPlus/advantageMainPlus";
import linkCategories from '@public/constData/linkCategories';
import NewsMain from "@components/News/newsMain";
import StockMain from "@components/Stock/stockMain";

import { PATH_FULL_NEWS, PATH_FULL_STOCK } from '@public/constData/pathJson';

export async function getStaticProps() {
 
    const user = process.env.API_USER;
    const password = process.env.API_PASS;
    const usedPas = `${user}:${password}`;

    const option = {
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(usedPas).toString('base64')
        }
    }

    const res = await fetch(PATH_FULL_NEWS, option);
    const data = await res.json();

    const res_stock = await fetch(PATH_FULL_STOCK, option);
    const data_stock = await res_stock.json();

    return {
        props: { 
            newsData: data,
            stockData: data_stock
        }
    }
}


function HomePage({widthDevice, newsData, stockData}) {
    return (
        <>
            <Head />
            
            <AdvantageMain widthDevice={widthDevice} />

            <MainLinkGarage widthDevice={widthDevice} />

            <Categories linkCategories={linkCategories} widthDevice={widthDevice} />

            <StockMain stockData={stockData} />

            <HelpMain widthDevice={widthDevice} />

            <AdvantageMainPlus />

            <NewsMain newsData={newsData} />

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