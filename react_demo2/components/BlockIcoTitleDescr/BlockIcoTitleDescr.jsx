import React from 'react'

function BlockIcoTitleDescr(props) {
    return (
        <div className={props.classBlock}>
            <div className={props.classIco}>
                <span data-ico={props.data_ico}></span>
            </div>
            <div className={props.classWrapTitleDescr}>
                <div className={props.classTitle}></div>
                <div className={props.classDescr}></div>
            </div>
        </div>
    );
}

export default BlockIcoTitleDescr;