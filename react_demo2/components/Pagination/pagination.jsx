import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import ItemsPage from '@components/ItemsPage/itemPage';
import style from './pagination.module.scss';
import { useRouter } from 'next/router';



function Pagination ({ itemsPerPage, paginationData, stockList }) {
  // We start with an empty list of items. // Начнем с пустого списка элементов.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets //Здесь мы используем смещения элементов; мы могли бы также использовать смещения страницы
  // following the API or data you're working with. //следуя API или данным, с которыми вы работаете.
  const [itemOffset, setItemOffset] = useState(0);
  const { asPath } = useRouter();

  useEffect(() => {
    // Fetch items from another resources. //Получить элементы из других ресурсов
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(paginationData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(paginationData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page. //Вызывать, когда пользователь щелкает, чтобы запросить другую страницу.
  const handlePageClick = (event) => {   
    const newOffset = (event.selected * itemsPerPage) % paginationData.length;
    /*console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );*/
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemsPage 
        itemsPageData={currentItems}
        stockList={stockList}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={`ul_reset_style ${style.container}`}
        pageClassName={style.item}
        pageLinkClassName={style.item_link}
        previousClassName={`${style.item} ${style.item_prev}`}
        nextClassName={`${style.item} ${style.item_next}`}
        previousLinkClassName={style.item_link}
        nextLinkClassName={style.item_link}
        activeClassName={style.active}
        disabledClassName={style.disabled}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;