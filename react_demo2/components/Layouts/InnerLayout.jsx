import BreadCrumbs from '@components/Breadcrumbs/breadcrumbs';
import React from 'react';

function InnerLayout({
    children
    }) {
    return (
        <>
            <div className="inner_page">
                <BreadCrumbs />
                {children}
            </div>
        </>
    );
}

export default InnerLayout;