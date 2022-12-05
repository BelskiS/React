import React from 'react';
import Link from 'next/link';

function LinkPhone(props) {
    const cleanPhone = () => {
        let phoneNumber = props.tel;

        return phoneNumber.split('').filter(item => Number(item) || item == "+" || item == "0" ).join('');
    }
    
    return (
        <Link href={`tel:${cleanPhone()}`} className={`site_link ${props.className}`} >
            <span className={`
                ${!props.classNameIco ? '' : props.classNameIco}
                ${props.icoName}
            `}></span>
            <span>
                {props.tel}
            </span>
        </Link>
    );
}

export default LinkPhone;