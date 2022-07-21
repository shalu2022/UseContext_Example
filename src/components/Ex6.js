import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalContext'
import ReactPaginate from 'react-paginate'
import PhotoItem from './screens/PhotoItem'

function Ex6({itemsPerPage}) {
    const data = useContext(GlobalContext)
    const photos = data.photoApi.photos

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(photos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(photos.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % photos.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
        
      return (
        <div className="caontainer">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Photos</h3>
                </div>
            </div>
            <div className="row">
                {
                 currentItems && currentItems.map((item, index)=>{
                    return(
                        <PhotoItem key={index} {...item}/>
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
    


export default Ex6