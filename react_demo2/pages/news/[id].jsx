import React from 'react';

import Head from '@components/head';
import { useRouter } from 'next/router';
import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import { PATH_FULL_NEWS } from '@public/constData/pathJson';
import NewsStockDetail from '@components/NewsStockDetail/newsStockDetail';


export async function getStaticPaths() {
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

    const paths = data.map(item_news => {
        return {
            params: { id: item_news.ID.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
 
    const user = process.env.API_USER;
    const password = process.env.API_PASS;
    const usedPas = `${user}:${password}`;

    const option = {
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(usedPas).toString('base64')
        }
    }

    const id = context.params.id;
    const res = await fetch(PATH_FULL_NEWS + `&arg[arFilter][1][CODE]=ID&arg[arFilter][1][VALUE]=` + id, option);
    const resFull = await fetch(PATH_FULL_NEWS, option);
    const data = await res.json();
    const dataFull = await resFull.json();

    return {
        props: { 
            newsData: data,
            newsDataFull: dataFull
        }
    }
}

function NewsDetails({ newsData, newsDataFull }) {
    const { asPath } = useRouter();
    const titlePage = newsData[0].NAME;
    const titleParent = newsData[0].IBLOCK_NAME;

    return (
        <>
            <Head title={titlePage}/>
            <BreadCrumbs
                pathLink={asPath}
                titleLink={titlePage}
                titleParent={titleParent}
            />

            <div className="site_container">
                <h1 className="title_page">{titlePage}</h1>

                <NewsStockDetail 
                    dataDetail={newsData} 
                    dataDetailFull={newsDataFull}
                    titleParent={titleParent}
                />
            </div>
        </>
    );
}

export default NewsDetails;