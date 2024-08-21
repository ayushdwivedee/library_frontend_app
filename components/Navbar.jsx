import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <HStack>
        <ChakraLink  as={ReactRouterLink} to={"/book/create"}>Create Book</ChakraLink>
        <ChakraLink  as={ReactRouterLink} to={"/user/register"}>Register</ChakraLink>
        <ChakraLink  as={ReactRouterLink} to={"/user/login"}>Login</ChakraLink>
    </HStack>
      
   
  )
}

export default Navbar
