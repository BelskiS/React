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

    const res = await fetch("https://nalivaika.docker.e-comexpert.ru/rest.php?f=Custom_GetList&out=json&arg[arOrder][0][CODE]=SORT&arg[arOrder][0][VALUE]=ASC&arg[arFilter][0][CODE]=IBLOCK_ID&arg[arFilter][0][VALUE]=31&arg[arGroupBy][0][CODE]=&arg[arGroupBy][0][VALUE]=&arg[arNavStartParams][0][CODE]=&arg[arNavStartParams][0][VALUE]=&arg[arSelectFields][0][CODE]=&arg[arSelectFields][0][VALUE]=&arg[include_properties]=", option);
    
    const data = await res.json();

    const res_stock = await fetch("https://nalivaika.docker.e-comexpert.ru/rest.php?f=Custom_GetList&out=json&arg[arOrder][0][CODE]=SORT&arg[arOrder][0][VALUE]=ASC&arg[arFilter][0][CODE]=IBLOCK_ID&arg[arFilter][0][VALUE]=32&arg[arGroupBy][0][CODE]=&arg[arGroupBy][0][VALUE]=&arg[arNavStartParams][0][CODE]=&arg[arNavStartParams][0][VALUE]=&arg[arSelectFields][0][CODE]=&arg[arSelectFields][0][VALUE]=&arg[include_properties]=", option);
    
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