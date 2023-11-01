import React from 'react'

const Pagination = ({prodPerpage,totalProducts,setCurrentpage}) => {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalProducts/prodPerpage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div>
      {pageNumbers.map((numbers) => {
        return(
            <button onClick={() => setCurrentpage(numbers)}>{numbers}</button>
        )
      })}
    </div>
  )
}

export default Pagination
