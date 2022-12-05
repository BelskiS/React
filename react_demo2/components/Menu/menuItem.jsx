import React from 'react';
import Link from 'next/link';

function MenuItem(props) {
    return (
        <>
        {props.linkItem.map((link) =>
            <li key={link.id}>
                <Link href={link.url} className={`site_link site_link_hover_other`}>
                    {link.title}
                </Link>
            </li>
        )}
        </>
    );
}

export default MenuItem;