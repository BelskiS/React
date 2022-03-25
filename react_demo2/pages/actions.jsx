import React from 'react';

import Head from '@components/head';
import StocksList from '@components/Stock/stockList';
import { PATH_FULL_STOCK } from '@public/constData/pathJson';

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

    const res_stock = await fetch(PATH_FULL_STOCK, option);
    const data_stock = await res_stock.json();

    return {
        props: { 
            stockData: data_stock
        }
    }
}

function Stocks({stockData}) {
    return (
        <>
            <Head title="Скидки и акции" />

            <div className="site_container">
                <h1 className="title_page">Скидки и акции</h1>

                <StocksList stockData={stockData} />
            </div>
        </>
    );
}

export default Stocks;