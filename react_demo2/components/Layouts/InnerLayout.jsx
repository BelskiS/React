import React from 'react';

function InnerLayout({
    children
    }) {
    return (
        <>
            <div className="inner_page">
                <div className="wrap_site_breadcrumbs">
                    <div className="site_container">
                        <div className="site_breadcrumbs">например хлебные крошки</div>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}

export default InnerLayout;