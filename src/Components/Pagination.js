import React from 'react'
import './Pagination.css'

const Pagination = ({prodPerpage,totalProducts,setCurrentpage}) => {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalProducts/prodPerpage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div class="pagination">
      {pageNumbers.map((numbers) => {
        return(
            <button class="page-btn" onClick={() => setCurrentpage(numbers)}>{numbers}</button>
        )
      })}
    </div>
  )
}

export default Pagination
