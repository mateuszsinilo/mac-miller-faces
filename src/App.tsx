import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import Header from "./components/Header/header"
import theme from "./theme"
import MainFeel from "./components/MainFeel/mainFeel"

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Header />
    <MainFeel/>
  </ChakraProvider>
)
