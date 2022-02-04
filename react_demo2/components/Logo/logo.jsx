import React from 'react';
import Link from 'next/link';

import style from "./logo.module.scss";

function Logo(props) {
    return (
        <Link href="/">
            <a className={` 
                    ${style.common}
                    ${props.pos_header ? style.head 
                    : props.pos_footer ? style.foot 
                    : ""}
                `}>
                <svg width="230" height="28" viewBox="0 0 230 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4223 22.5459C10.4932 22.1914 10.4932 21.7659 10.4932 21.2696C10.4932 17.2992 8.57893 15.1722 5.60113 15.1722C1.98522 15.1722 0 18.2209 0 21.695C0 25.5236 2.12702 27.8634 5.95563 27.8634C7.44453 27.8634 8.93341 27.5798 9.92602 27.1544L9.42971 24.8855C8.57891 25.1691 7.6572 25.3819 6.45189 25.3819C4.67939 25.3819 3.19052 24.531 3.11962 22.4749H10.4223V22.5459ZM3.11962 20.277C3.19052 19.0717 3.89952 17.441 5.45932 17.441C7.09002 17.441 7.5863 19.0008 7.5154 20.277H3.11962ZM18.0795 22.1204V19.8516H12.053V22.1204H18.0795ZM28.5727 15.6685C28.0764 15.4558 27.0839 15.1722 26.0204 15.1722C21.979 15.1722 19.5684 18.0082 19.5684 21.6241C19.5684 25.5236 21.9082 27.8634 25.4532 27.8634C26.7294 27.8634 27.8637 27.5797 28.4309 27.367L28.0764 24.9564C27.5801 25.1691 26.942 25.3819 26.0912 25.3819C24.2478 25.3819 22.8298 23.9638 22.8298 21.6241C22.8298 19.4971 24.0351 17.7955 26.0912 17.7955C27.0129 17.7955 27.5801 18.0082 28.0055 18.2209L28.5727 15.6685ZM35.7337 15.1722C32.4014 15.1722 29.9199 17.5119 29.9199 21.6241C29.9199 25.5945 32.2596 27.9343 35.5919 27.9343C38.2861 27.9343 41.3348 26.1618 41.3348 21.4824C41.2639 17.7247 39.1369 15.1722 35.7337 15.1722ZM38.0024 21.4824C38.0024 23.6803 37.1517 25.4528 35.6628 25.4528C34.1029 25.4528 33.2522 23.6803 33.2522 21.4824C33.2522 19.639 33.8902 17.5119 35.6628 17.5119C37.2935 17.5828 38.0024 19.5681 38.0024 21.4824ZM53.1751 17.2284C52.6788 15.9522 51.5444 15.1722 50.0555 15.1722C48.2121 15.1722 47.1486 16.1648 46.5814 17.0865H46.5105L46.3687 15.4559H43.6036C43.6745 16.5194 43.6745 17.7246 43.6745 19.1426V27.7215H46.865V20.3479C46.865 18.7172 47.9285 17.8664 48.8502 17.8664C50.1264 17.8664 50.6227 19.0008 50.6227 20.4898V27.7215H53.8132V20.277C53.8132 18.5754 54.8058 17.8664 55.7275 17.8664C57.0037 17.8664 57.5 19.0009 57.5 20.7734V27.7215H60.6905V20.277C60.6905 16.732 59.0598 15.2431 56.9328 15.2431C55.4439 15.1722 54.1677 15.7395 53.1751 17.2284Z" fill="#414350"/>
                    <path d="M90.6104 11.4858V12.9748L87.4907 16.0943H73.3107V11.4858H90.6104ZM66.5752 27.6511V0H90.5394V1.48889L86.4272 5.60113H72.2472V22.1208H90.4685V23.6098L86.3563 27.7219H66.5752V27.6511Z" fill="#414350"/>
                    <path d="M141.659 19.9938H132.512V14.3928H141.659C142.864 14.3928 143.856 13.9673 144.707 13.1165C145.558 12.2657 145.983 11.2022 145.983 9.9969C145.983 8.7916 145.558 7.72808 144.707 6.87728C143.856 6.02648 142.864 5.60113 141.659 5.60113H131.591V27.6511H129.889L125.777 23.5388V0H141.588C144.424 0 146.763 0.992585 148.749 2.90689C150.734 4.89209 151.655 7.23181 151.655 9.92602C151.655 12.6911 150.663 15.0308 148.749 16.9452C146.834 19.0013 144.424 19.9938 141.659 19.9938ZM177.605 11.4858V12.9748L174.485 16.0943H160.305V11.4858H177.605ZM153.641 27.6511V0H177.605V1.48889L173.493 5.60113H159.313V22.1208H177.534V23.6098L173.422 27.7219H153.641V27.6511ZM195.401 14.3928C196.606 14.3928 197.599 13.9673 198.449 13.1165C199.3 12.2657 199.726 11.2022 199.726 9.9969C199.726 8.7916 199.3 7.72808 198.449 6.87728C197.599 6.02648 196.606 5.60113 195.401 5.60113H185.333V27.6511H183.631L179.519 23.5388V0H195.33C198.166 0 200.506 0.992585 202.491 2.90689C204.476 4.89209 205.398 7.23181 205.398 9.92602C205.398 12.6911 204.405 15.0308 202.491 16.9452C201.073 18.3632 199.655 19.2139 198.308 19.4975L206.958 27.5802H199.938L191.643 19.9229H186.184V14.3218H195.401V14.3928ZM218.727 27.6511L214.615 23.5388V5.53025H205.043V0H230V5.53025H220.429V27.5802H218.727V27.6511Z" fill="#414350"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M123.366 0L111.526 13.8255L123.366 27.6511V0ZM108.052 17.8668C107.343 18.7176 99.6855 27.6511 99.6855 27.6511H116.489C116.418 27.6511 108.761 18.7176 108.052 17.8668ZM92.6664 27.6511L104.578 13.8255L92.7374 0H92.6664V27.6511ZM116.418 0H99.6146L107.981 9.78425L116.418 0Z" fill="#E84D4D"/>
                </svg>
            </a>
        </Link>
    );
};

export default Logo;