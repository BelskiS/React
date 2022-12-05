import React, { useState, useEffect, useRef } from 'react';
import HeaderUp from './headerUp/headerUp';
import HeaderDown from './headerDown/headerDown';

import style from './header.module.scss';

function Header({widthDevice}) {
    const [isShow, setIsShow] = useState(false);
    const [isHeadMobShow, setIsHeadMobShow] = useState(false);
    const siteContentPosRef = useRef();
    
    const fixMenuRef = useRef();
    const forFixMenuRef = useRef();
    const forStaticMenuRef = useRef();
    
    const fixLoginRef = useRef();
    const forFixLoginRef = useRef();
    const forStaticLoginRef = useRef();

    const fixHeaderLinkRef = useRef();
    const forfixHeaderLinkRef = useRef();
    const forStaticHeaderLinkRef = useRef();
    
    const isheadmodshow = widthDevice <= 767;
    if(isheadmodshow !== isHeadMobShow) setIsHeadMobShow(isheadmodshow);

    const handleScroll = () => {
        siteContentPosRef.current = document.querySelector('.site_wrap_content');
        let posSiteContent = siteContentPosRef.current.offsetTop;
        let windowpos = window.pageYOffset;

        fixMenuRef.current = document.querySelector('.fix_menu');
        forFixMenuRef.current = document.querySelector('.for_fix_menu');
        forStaticMenuRef.current = document.querySelector('.for_static_menu');

        fixLoginRef.current = document.querySelector('.fix_login');
        forFixLoginRef.current = document.querySelector('.for_fix_login');
        forStaticLoginRef.current = document.querySelector('.for_static_login');

        fixHeaderLinkRef.current = document.querySelector('.header_link_help');
        forfixHeaderLinkRef.current = document.querySelector('.for_fix_header_link');
        forStaticHeaderLinkRef.current = document.querySelector('.for_static_header_link');
        
        if(windowpos > posSiteContent + 1  && window.innerWidth > 767) {
            setIsShow(true);

            forFixMenuRef.current.prepend(fixMenuRef.current);
            forfixHeaderLinkRef.current.append(fixHeaderLinkRef.current);
            forFixLoginRef.current.prepend(fixLoginRef.current);
        } else {
            setIsShow(false);

            forStaticMenuRef.current.prepend(fixMenuRef.current);
            forStaticLoginRef.current.prepend(fixLoginRef.current);
            forStaticHeaderLinkRef.current.append(fixHeaderLinkRef.current);
        }
    };

    useEffect(() => {
        // handleScroll();
        ["load", "resize", "scroll"].forEach(function (e) {
            window.addEventListener(e, handleScroll);
            return() => window.removeEventListener(e, handleScroll);
        });
    }, []);

    return (
        <header className={`site_header ${isShow ? style.site_head : ''}`}>
            <HeaderUp isHeadMobShow={isHeadMobShow} />
        
            <HeaderDown isShow={isShow} isHeadMobShow={isHeadMobShow} />
        </header>
    );
}

export default Header;