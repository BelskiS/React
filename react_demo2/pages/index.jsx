import React from "react";
import Head from "../components/head";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import AdvantageMain from '../components/Main/AdvantageMain/advantage';
import MainLinkGarage from '../components/Garage/mainLinkGarage';
import CategoriesMain from '../components/Main/CategoriesMain/categories';

import linkCategories from '../public/constData/linkCategories';
import Link from "next/link";

function HomePage({widthDevice}) {
    return (
        <>
            <Head></Head>
            
            <Header widthDevice={widthDevice}></Header>

            <div className="site_wrap_content">
                <AdvantageMain widthDevice={widthDevice} />

                <MainLinkGarage widthDevice={widthDevice} />
                
                <CategoriesMain linkCategories={linkCategories} widthDevice={widthDevice} />

            </div>

            <Footer />
        </>
    )
}

export default HomePage;