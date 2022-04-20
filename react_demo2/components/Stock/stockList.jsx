import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';

function StocksList({ stockData }) {
    return (
        <NewsStocksList dataNewsStock={stockData} stockList />
    );
}

export default StocksList;