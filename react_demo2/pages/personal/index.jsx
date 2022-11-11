import React from 'react';
import { useRouter } from 'next/router';
import Head from '@components/head';
import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import PersonalFilling from '@components/PersonalFilling/personalFilling';



function Personal() {
    const { asPath } = useRouter();
    const titlePage = "Личный кабинет";

    return(
        <>
            <Head title={titlePage} />
            <BreadCrumbs 
                pathLink={asPath}
                titleLink={titlePage}
            />

            <div className="site_container">
                <PersonalFilling />
            </div>
        </>
    );
}

export default Personal;