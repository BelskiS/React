import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';

function ItemsPage({ itemsPageData, stockList }) {
    return (
        <NewsStocksList 
          dataNewsStock={itemsPageData}  
          stockList={stockList}
        />
    );
  }

export default ItemsPage;