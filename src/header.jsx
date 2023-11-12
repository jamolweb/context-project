import { Button } from '@chakra-ui/button'
import {
  Flex,
  Heading,
  Text,
  Box
} from '@chakra-ui/layout'
import React from 'react'


import { useContext } from 'react'
import { ProductContext } from './context/Products'
import { Cart } from './cards'
import { Image } from '@chakra-ui/react'
import { useEffect } from 'react'

const Header = () => {

  const [state] = useContext(ProductContext)

  let [arr] = useContext(Cart)

  useEffect(() => {
    console.log(arr);
  }, [arr])



  return (
    <Box>
      <Flex justifyContent={'space-evenly'} alignItems={'center'} pt={'20px'}>
        <Heading>
          Logo
        </Heading>
        <Flex gap={'20px'}>
          <Text>home</Text>
          <Text>about</Text>
          <Text>contact</Text>
        </Flex>
        <Button colorScheme='facebook'>
          Products : <Text color={'gold'}>
            {
              state.length
            }
          </Text>
        </Button>
      </Flex>
    </Box>
  )
}

export default Header