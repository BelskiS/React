import React from 'react';
import Head from '@components/head';
import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import PersonalFilling from '@components/PersonalFilling/personalFilling';
import { useRouter } from 'next/router';

function MyProfile() {
    const { asPath } = useRouter();
    const titleParent = "Личный кабинет";
    const titlePage = "Мой профиль";

    return (
        <>
            <Head title={titlePage}/>
            <BreadCrumbs 
                pathLink={asPath}
                titleLink={titlePage}
                titleParent={titleParent}
            />

            <div className="site_container">
                <PersonalFilling isMyprofile />
            </div>
        </>
    );
}

export default MyProfile;