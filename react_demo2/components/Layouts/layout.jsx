import React from 'react';

import Header from '@components/Header/header';
import Footer from '@components/Footer/footer';

function Layout({
    children,
    widthDevice
    }) {
    return (
        <>
            <Header widthDevice={widthDevice} />
            <div className="site_wrap_content">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;