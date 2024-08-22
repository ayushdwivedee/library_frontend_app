import { Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Flex bgColor={"pink"} px={"60px"} py={3} fontSize={34} fontWeight={500}  >
      <ChakraLink as={ReactRouterLink} to={"/"} _hover={{color:"teal"}}>
        Ayush Dwivedi
      </ChakraLink>
      <Spacer />
      <ChakraLink as={ReactRouterLink} to={"/book/create"} _hover={{color:"teal"}}>
        Create Book
      </ChakraLink>
      <Spacer />
      <ChakraLink as={ReactRouterLink} to={"/user/register"} _hover={{color:"teal"}}>
        Register
      </ChakraLink>
      <Spacer />
      <ChakraLink as={ReactRouterLink} to={"/user/login"} _hover={{color:"teal"}}>
        Login
      </ChakraLink>
    </Flex>
  );
};

export default Navbar;
