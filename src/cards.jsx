import {
  Grid,
  GridItem,
  Text,
  Box,
} from '@chakra-ui/layout'
import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './context/Products'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { Card, Image } from '@chakra-ui/react'
import Header from './header'


export const Cart = createContext([])

const cards = () => {

  let arr = []

  let findId = (itemId) => {
    arr.push(itemId)
    console.log(arr);
  }

  const [state] = useContext(ProductContext)

  useEffect(()=>{
    
    
  localStorage.setItem('id', JSON.stringify(arr))

  let items = localStorage.getItem('id')
  
  // console.log(items);
  
},[arr])
  return (
    <Box>
      <Grid>
        {state.map(item => {
          return <GridItem
            key={item.id}
            onClick={() => findId(item.id)}
          >
            {/* <Image src={item.thumbnail} /> */}
            <Text>{
              item.title
            }</Text>
          </GridItem>
        })}
      </Grid>
    </Box>
  )
}

export default cards