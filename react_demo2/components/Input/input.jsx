import React from 'react';

function Input(props) {
    return (
        <div className={`${props.wrapClassName ? props.wrapClassName : ""} site_field`}>
            <input
                className={props.className ? props.className : ""} 
                type={props.type}
                placeholder={props.placeholder} />
        </div>
    );
}

export default Input;