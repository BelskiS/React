import React from 'react';
import Link from 'next/link';
import style from "./logo.module.scss";

function Logo(props) {
    return (
        <Link href="/">
            <a className={ 
                props.pos_header ? style.head 
                : props.pos_footer ? style.foot 
                : "" }>
                <img src="/Logo.svg" alt={props.name} />
            </a>
        </Link>
    );
};

export default Logo;