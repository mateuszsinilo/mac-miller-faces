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
import { HomePage } from "./pages/homePage"
import { Main } from "./components/Main/main"


export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
     <Main />
  </ChakraProvider>
)
