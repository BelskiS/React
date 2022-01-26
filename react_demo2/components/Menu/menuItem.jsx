import React from 'react';
import Link from 'next/link';

function MenuItem(props) {
    return (
        <>
        {props.linkItem.map((link) =>
            <li key={link.id}>
                <Link href={link.url}>
                    <a className={`site_link site_link_hover_other`}>{link.title}</a>
                </Link>
            </li>
        )}
        </>
    );
}

export default MenuItem;