import React from 'react';

import Head from '@components/head';
import { useRouter } from 'next/router';
import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import { PATH_FULL_STOCK } from '@public/constData/pathJson';
import Pagination from '@components/Pagination/pagination';

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
    const { asPath } = useRouter();
    const titlePage = "Акции";
    const numItemPage = 3;
    stockData.sort((a, b) => b.ID - a.ID );

    return (
        <>
            <Head title={titlePage} />
            <BreadCrumbs 
                pathLink={asPath}
                titleLink={titlePage}
            />

            <div className="site_container">
                <h1 className="title_page">{titlePage}</h1>

                <Pagination 
                    paginationData={stockData}
                    itemsPerPage={numItemPage}
                    stockList
                />
            </div>
        </>
    );
}

export default Stocks;