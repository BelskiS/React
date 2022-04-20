import React from 'react';

import Head from '@components/head';
import { useRouter } from 'next/router';
import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import NewsList from '@components/News/newsList';
import { PATH_FULL_NEWS } from '@public/constData/pathJson';


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

    return {
        props: { 
            newsData: data,
        }
    }
}

function News({ newsData }) {
    const { asPath } = useRouter();
    const titlePage = "Новости";

    return (
        <>
            <Head title={titlePage} />
            <BreadCrumbs 
                pathLink={asPath}
                titleLink={titlePage}
            />
            
            <div className="site_container">
                <h1 className="title_page">{titlePage}</h1>

                <NewsList newsData={newsData} />
            </div>
        </>
    );
}

export default News;
