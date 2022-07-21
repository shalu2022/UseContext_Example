import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../GlobalContext'
import AlbumItem from './screens/AlbumItem'
import ReactPaginate from 'react-paginate';

function Ex5({itemsPerPage}) {
const data = useContext(GlobalContext);
const albums = data.albumApi.albums

const [currentItems, setCurrentItems] = useState(null);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);


useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(albums.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(albums.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % albums.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
    
  return (
    <div className="caontainer">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Albums</h3>
            </div>
        </div>
        <div className="row">
            {
             currentItems && currentItems.map((item, index)=>{
                return(
                    <AlbumItem key={index} {...item}/>
                )
             })
            }
        </div>
        <div className="row">
        <>
            <ReactPaginate
                 nextLinkClassName='page-link'
                 pageLinkClassName='page-link'
                 previousLinkClassName='page-link'

                 nextLabel='next >'
                 previousLabel='< previous'

                 pageRangeDisplayed={4}
                 pageCount={pageCount}
                 onPageChange={handlePageClick}
                 
                 className="pagination"
                 pageClassName='page-item'
                 activeClassName='active'
                 activeLinkClassName='active'
                 renderOnZeroPageCount={null}
            />
        </>
        </div>
    </div>
  )
}

export default Ex5