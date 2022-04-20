import React from 'react';

import NewsStocksList from '@components/NewsStocksList/newsStocksList';

function NewsList({ newsData }) {
    return (
        <NewsStocksList dataNewsStock={newsData} />
    );
}

export default NewsList;