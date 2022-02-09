import React from 'react';
import Link from 'next/link';

function BtnSite(props) {
    return (
        <>
            {!props.btn_link ? 
                <button className={`btn_site ${props.className}`} type={props.type}>
                    {props.icoName ? 
                        <span className={`
                            ${!props.classNameIco ? '' : props.classNameIco}
                            ${props.icoName}
                        `}></span>
                    : ""}

                    {props.text ? 
                        <span className={`
                            ${!props.classNameText ? '' : props.classNameText}
                        `}>
                            {props.text}
                        </span>
                    : ""}
                </button>
            : 
                <Link href={props.href}>
                    <a className={`btn_site ${props.className ? props.className : ""}`}>
                        {props.icoName ? 
                            <span className={`
                                ${!props.classNameIco ? '' : props.classNameIco}
                                ${props.icoName}
                            `}></span>
                        : ""}
                        
                        {props.text ? 
                            <span className={`
                                ${!props.classNameText ? '' : props.classNameText}
                            `}>
                                {props.text}
                            </span>
                        : ""}
                    </a>
                </Link>
            }
        </>
    );
}

export default BtnSite;