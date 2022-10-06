import React from 'react';
import Head from '@components/head';
import LoginRegistration from '@components/LoginRegistration/loginRegistration';



function Login() {
    const titlePage = "Авторизация";

    return (
        <>
            <Head title={titlePage} />

            <LoginRegistration loginPage titlePage={titlePage} />
        </>
    )
}

export default Login;