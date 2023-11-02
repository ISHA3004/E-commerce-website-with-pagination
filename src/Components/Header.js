import React from 'react'
import './Header.css'

const Header = ({productItems,productItemsfilter,setProductItemsfilter}) => {
    
    const handleFilter = () => {
        var cat_selected = (document.getElementById("select_cat")).value;
        let productItemsCopy = productItems;

        let filtered_cat = productItemsCopy.filter((item) => 
        item.category === cat_selected
        );
        
        if(cat_selected === "none")
            setProductItemsfilter(productItems);
        else
            setProductItemsfilter(filtered_cat);
    }

    const handleSort = () => {
        let prodSorted = productItemsfilter.sort((a, b) => Number(b.price) - Number(a.price));
        console.log(prodSorted);
        setProductItemsfilter(prodSorted);
    }
  return (
    <div>
      <div class="header">DevTown</div>
      <div class="func">
      <div class="filter">
        <label htmlFor='select_cat'>Choose category</label>
        <select id="select_cat" onChange={()=>handleFilter()}>
            <option value="none" selected>None</option>
            <option value="men's clothing">Mens clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      <div class="sort">
        <button class="sort-btn" onClick={() => handleSort()}>Sort</button>
      </div>
      </div>
    </div>
  )
}

export default Header
