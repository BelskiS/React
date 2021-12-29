import React from 'react';

function LinkPhone(props) {
    const cleanPhone = () => {
        let phoneNumber = props.tel;

        return phoneNumber.split('').filter(item => Number(item) || item == "+" || item == "0" ).join('');
    }
    
    return (
        <a href={`tel:${cleanPhone()}`} className={`site_link ${props.className}`}>
            <span className={`
                ${!props.classNameIco ? '' : props.classNameIco}
                ${props.icoName}
            `}></span>
            {props.tel}
        </a>
    );
}

export default LinkPhone;