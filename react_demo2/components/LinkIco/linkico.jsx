import React from 'react';
import Link from 'next/link';

function LinkIco(props) {   
    return (
        <Link
            href={
                props.mailto ? `mailto:${props.mailto}`
                : props.href ? props.href
                : ""
            } 
            className={`
                ${!props.siteLinkTwo ? 'site_link' : 'site_link_two'} 
                ${props.className}
            `}
        >
            <span className={`
                ${!props.classNameIco ? '' : props.classNameIco}
                ${props.icoName}
            `}></span>
            <span className={`
                ${!props.classNameText ? '' : props.classNameText}
            `}>
                {props.mailto ? props.mailto 
                : props.text ? props.text
                : ""}
            </span>
        </Link>
    );
}

export default LinkIco;