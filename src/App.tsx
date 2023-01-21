import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorMode,
} from "@chakra-ui/react"
import Header from "./components/Header/header"
import theme from "./theme"
import MainFeel from "./components/MainFeel/mainFeel"
import { HomePage } from "./pages/homePage"
import { Main } from "./components/Main/main"
import { Fonts } from "./fonts"
import themeDark from "./theme-dark"



export const App = () =>
    {
        const { colorMode, toggleColorMode } = useColorMode()
        return <ChakraProvider resetCSS theme={colorMode === 'dark' ? themeDark : theme}>
    <Fonts/>
    <Main/>
</ChakraProvider>
}

