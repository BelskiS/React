import React from 'react';
import Head from '@components/head';
import LoginRegistration from '@components/LoginRegistration/loginRegistration';



function Registration() {
    const titlePage = "Восстановление пароля";

    return (
        <>
            <Head title={titlePage} />

            <LoginRegistration titlePage={titlePage} forgotPassword />
        </>
    )
}

export default Registration;