import React from 'react';
import Link from 'next/link';

function BtnSite(props) {
    return (
        <>
            {!props.btn_link ? 
                <button 
                    className={`
                        ${!props.viewLink ? 'btn_site' : 'btn_site_viewLink'} 
                        ${props.className ? props.className : ''}`}
                    type={props.type}
                    onClick={props.onClick ? props.onClick : null }
                    disabled={props.disabled ? props.disabled : null}
                >
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
                <Link href={props.href} className={`btn_site ${props.className ? props.className : ""}`}>
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
                </Link>
            }
        </>
    );
}

export default BtnSite;