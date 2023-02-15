import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

type PaginatedItemsProps = {
  items: [];
  itemsPerPage: number;
  setItems: any;
};

interface HTMLInputElements extends HTMLInputElement {
  selected: number;
}

const PaginatedItems = ({ items, itemsPerPage, setItems }: PaginatedItemsProps) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: HTMLInputElements): void => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItems(currentItems);
  }, [itemOffset]);

  useEffect(() => {
    const updateMedia = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <article>
      <ReactPaginate
        activeClassName='text-white bg-very-dark-teal'
        breakLabel='...'
        className='flex flex-row gap-2 justify-center items-center font-bold text-[18px] lg:text-[20px]'
        marginPagesDisplayed={isMobile ? 1 : 3}
        nextClassName='w-[40px] h-[40px] bg-very-dark-teal rounded-md text-white flex justify-center items-center lg:w-[60px] lg:h-[45px]'
        nextLabel={isMobile ? '>' : 'Next'}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName='w-[40px] h-[40px] bg-dark-teal rounded-md flex justify-center items-center border-[2px] border-very-dark-teal lg:w-[45px] lg:h-[45px]'
        pageRangeDisplayed={isMobile ? 1 : 3}
        previousClassName=' w-[40px] h-[40px] bg-very-dark-teal rounded-md text-white flex justify-center items-center lg:w-[60px] lg:h-[45px]'
        previousLabel={isMobile ? '<' : 'Prev'}
      />
    </article>
  );
};

export default PaginatedItems;
