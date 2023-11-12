import React from 'react'
import { createContext } from 'react';
import Header from '../header';

export const ProductContext = createContext(0)
import Cards from '../cards';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const ProductProvider = () => {

  let [state, setState] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/')
      .then(result => setState(result.data.products))
  }, [])
  return (
    <ProductContext.Provider value={[state]}>
      <Header />
      <Cards />
    </ProductContext.Provider>
  )
}

export default ProductProvider;