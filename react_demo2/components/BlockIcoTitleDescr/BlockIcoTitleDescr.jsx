import React from 'react';
import Link from 'next/link';

import style from './blockIcoTitleDescr.module.scss'

function BlockIcoTitleDescr(props) {
    return (
        <>
            {!props.blockLink ?
                <div className={`${props.classBlock ? props.classBlock : ''} ${style.block}`}>
                    <div className={`${props.classIco ? props.classIco : ''} ${style.ico}
                    `}>
                        <span data-ico={`${props.data_ico ? props.data_ico : ''}`}></span>
                    </div>
                    <div className={`${props.classWrapTitleDescr ? props.classWrapTitleDescr : ''} ${style.classWrapTitleDescr}`}>
                        <div className={`${props.classTitle ? props.classTitle : ''} ${style.title}`}>
                            {props.textTitle}
                        </div>
                        <div className={`${props.classDescr ? props.classDescr : ''} ${style.descr}`}>
                            {props.textDescr}
                        </div>
                    </div>
                </div>
            : 
                <Link href={props.linkUrl} className={`${props.classBlock ? props.classBlock : ''} ${style.block}`}>
                    <span className={`${props.classIco ? props.classIco : ''} ${style.ico}`}>
                        <span data-ico={`${props.data_ico ? props.data_ico : ''}`}></span>
                    </span>
                    <span className={`${props.classWrapTitleDescr ? props.classWrapTitleDescr : ''} ${style.classWrapTitleDescr}`}>
                        <span className={`${props.classTitle ? props.classTitle : ''} ${style.title}`}>
                            {props.textTitle}
                        </span>
                        <span className={`${props.classDescr ? props.classDescr : ''} ${style.descr}`}>
                            {props.textDescr}
                        </span>
                    </span>
                </Link>
            }
        </>
    );
}

export default BlockIcoTitleDescr;