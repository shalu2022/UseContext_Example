import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalContext'
import ReactPaginate from 'react-paginate'
import TodoItem from './screens/TodoItem'

function Ex7({itemsPerPage}) {
    const data = useContext(GlobalContext)
    const todos = data.todoApi.todos

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(todos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(todos.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % todos.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
        
      return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex flex-column">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">To Do List</h3>
                </div>
                <div className="col-md-12">
                            <div className="card ">
                            <div className="card-header">
                                <h6 className='text-secondary text-center'>To DOs</h6>
                            </div>
                            <div className="card-body">
                            <ul className="list-group">
                               {currentItems && currentItems.map((item, index)=>{
                                return <TodoItem key={index} {...item}/> })}
                            </ul>     
                            </div>                   
                        </div>
                       </div>
            <>
            <div className="col-md-12 mt-4">
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
                </div>
            </>
            </div>
         </div>
      )
    }



export default Ex7