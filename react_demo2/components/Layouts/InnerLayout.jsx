import React from 'react';

function InnerLayout({
    children
    }) {
    return (
        <>
            <div className="inner_page">
                {children}
            </div>
        </>
    );
}

export default InnerLayout;