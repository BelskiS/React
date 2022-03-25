import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';
import style from './news.module.scss';

function NewsList({ newsData }) {
    return (
        <NewsStocksList />
    );
}

export default NewsList;