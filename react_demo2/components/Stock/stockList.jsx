import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';
import style from './stock.module.scss';

function StocksList({ stockData }) {
    return (
        <NewsStocksList dataNewsStock={stockData} stockList />
    );
}

export default StocksList;