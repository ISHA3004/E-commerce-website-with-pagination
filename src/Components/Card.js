import React from 'react'
import './Card.css'

const Card = ({ productsOfPage, handleAddProduct }) => {
  return (
    <div class="row">
      {
        productsOfPage.map((item) => {
          return (
              <div className="card">
                <div className="cardimg">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="carddetails">
                  <div className="proddetails">
                    <p className='prodinfo'><b>Title: </b>{item.title}</p>
                  </div>
                  <div className="proddetails">
                    <p className='prodinfo'><b>Price :</b> {item.price}</p>
                  </div>
                  <div className="proddetails">
                    <p className='prodinfo'><b>Description :</b> {item.description}</p>
                  </div>
                  
                </div>
                <div className="atcbtn">
                    <button onClick={() => handleAddProduct(item)}>Add to cart</button>
                  </div>
              </div>
          )
        })
      }
    </div>
  )
}

export default Card