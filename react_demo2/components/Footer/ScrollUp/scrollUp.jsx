import React, { useState, useEffect } from 'react';

import style from './scroll.module.scss';

function ScrollUp() {
    const [showScroll, setShowScroll] = useState(false);
    
    const scrollPage = () => {
        window.scrollTo(0, 0);
    }

    const handleScroll = () => {
        let windowPos = window.pageYOffset;

        if(windowPos > 300 && window.innerWidth > 767) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    }

    useEffect(() => {
        ["load", "resize", "scroll"].forEach(function (e) {
            window.addEventListener(e, handleScroll);
        });
    }, [])

    return (
        <>
        {showScroll ? 
            <button className={style.up_btn} onClick={scrollPage}>
                <span className={`${style.up_btn__ico} icon-ion-arrow-back-circle`}></span>
            </button>
            : ""}
        </>

    );
};

export default ScrollUp;
