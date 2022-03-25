import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';
import style from './stock.module.scss';

function StocksList({ newsData }) {
    return (
        <NewsStocksList stockList />
    );
}

export default StocksList;