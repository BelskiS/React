import React, { useEffect } from 'react';
import Head from '@components/head';
import LoginRegistration from '@components/LoginRegistration/loginRegistration';



function Registration() {
    const titlePage = "Регистрация";

    return (
        <>
            <Head title={titlePage} />

            <LoginRegistration registrationPage titlePage={titlePage} />
        </>
    )
}

export default Registration;