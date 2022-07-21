import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { GlobalContext } from '../GlobalContext'
import PostItem from './screens/PostItem'

function Ex3(props) {
    const data = useContext(GlobalContext);
    const posts = data.postApi.posts;

    const [curItems, setCurItems] = useState(null);
    const [pCount, setPCount] = useState(0);
    const [itemOff, setItemOff] = useState(0);

    useEffect(() => {
        const endOff = itemOff + props.itemsPerPage;
        console.log(`offset = ${itemOff}-${endOff}`);
        setCurItems(posts.slice(itemOff, endOff));
        setPCount(Math.ceil(posts.length / props.itemsPerPage))
    }, [itemOff, props.itemsPerPage]);

    const handlerClick = (e) => {
        const newOff = (e.selected * props.itemsPerPage) % posts.length;
        console.log(`newOff = ${e.selected}-${newOff}`);
        setItemOff(newOff);
    }

    if (posts.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-warning">No Posts Found</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Posts(With Pagination)</h3>
                </div>
            </div>
            <div className="row">
                {
                    curItems && curItems.map((item, index) => {
                        return <PostItem key={index} {...item} />
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <ReactPaginate
                        nextLinkClassName='page-link'
                        nextLabel='next >'
                        pageRangeDisplayed={4}
                        pageCount={pCount}
                        onPageChange={handlerClick}
                        className="pagination"
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousLabel='< previous'
                        previousLinkClassName='page-link'
                        activeClassName='active'
                        activeLinkClassName='active'
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ex3;