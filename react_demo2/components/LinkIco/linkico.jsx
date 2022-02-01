import React from 'react';

function LinkIco(props) {   
    return (
        <a href={
            props.mailto ? `mailto:${props.mailto}`
            : props.href ? props.href
            : ""
        } 
        className={`site_link ${props.className}`}>
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
        </a>
    );
}

export default LinkIco;