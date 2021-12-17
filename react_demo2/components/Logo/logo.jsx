import React from 'react';
import Link from 'next/link';
import {logoLink, link} from "./logo.module.css";

function Logo(props) {
    return (
        <Link href="/">
            <a className="link">
                <img src="/Logo.svg" alt={props.name} />
            </a>
        </Link>
    );
};

export default Logo;