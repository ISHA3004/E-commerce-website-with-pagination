import React from 'react'

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
        let prodSorted = productItemsfilter.sort((a, b) => Number(b.cost) - Number(a.cost));
        console.log(prodSorted);
        setProductItemsfilter(prodSorted);
    }
  return (
    <div>
      <div>
        DevTown
      </div>
      <div>
        <label htmlFor='select_cat'>Choose category</label>
        <select id="select_cat" onChange={()=>handleFilter()}>
            <option value="none" selected>None</option>
            <option value="mens">Mens</option>
            <option value="womens">Women</option>
            <option value="kids">Kids</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleSort()}>Sort</button>
      </div>
    </div>
  )
}

export default Header
