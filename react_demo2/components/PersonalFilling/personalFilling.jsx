
import React from 'react';
import BlockIcoTitleDescr from '@components/BlockIcoTitleDescr/BlockIcoTitleDescr';

import style from './personalFilling.module.scss'

function PersonalFilling() {
    return (
        <BlockIcoTitleDescr
            classBlock={style.block}
            classIco={style.ico}
            data_ico={"ico_profile"}
            classWrapTitleDescr={style.classWrapTitleDescr}
            classTitle={`title_h4 ${style.title}`}
            classDescr={style.descr}
        />
    );
}

export default PersonalFilling;