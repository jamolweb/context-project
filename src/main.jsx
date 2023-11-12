import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import { Box, ChakraProvider } from '@chakra-ui/react'
import ProductProvider from './context/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ProductProvider>
      <Header />
    </ProductProvider>
  </ChakraProvider>,
)