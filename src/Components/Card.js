import React from 'react'
import './Card.css'

const Card = ({productsOfPage, handleAddProduct}) => {
  return (
    <>
      {
        productsOfPage.map((item) => {
          return(
          <div className="card">
            <div className="cardimg">
                <img src={item.imgurl} alt={item.itemname}/>
            </div>
            <div className="carddetails">
                <div className="proddetails">
                    <p className='prodinfo'>Item name : {item.itemname}</p>
                    <p className='prodinfo'>Price : {item.cost}</p>
                    {/* <p className='prodinfo'>Rating : {item.rating}</p> */}
                </div>
                <div className="atcbtn">
                    <button onClick={() => handleAddProduct(item)}>Add to cart</button>
                </div>
            </div>

        </div>
        )})
      }
    </>
  )
}

export default Card