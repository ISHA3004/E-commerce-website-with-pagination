import React, { useState } from 'react'
import Card from './Components/Card'
import items from './Components/data'
import Pagination from './Components/Pagination'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const productItems = items;
  const [productItemsfilter , setProductItemsfilter] = useState(items);
  const prodPerpage = 5;
  const [currentPage,setCurrentpage] = useState(1);
  const lastIndexOfPage = currentPage * prodPerpage;
  const firstIndexOfPage = lastIndexOfPage - prodPerpage;
  const productsOfPage = productItemsfilter.slice(firstIndexOfPage,lastIndexOfPage);

  return (
    <div>
      <Header productItems={productItems} productItemsfilter={productItemsfilter} setProductItemsfilter={setProductItemsfilter} />
      <Card productsOfPage={productsOfPage}/>
      <Pagination prodPerpage={prodPerpage} totalProducts={productItemsfilter.length} setCurrentpage={setCurrentpage}/>
      <Footer />
    </div>
  );
}

export default App;
