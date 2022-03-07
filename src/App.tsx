import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import Page from "./Page";
import theme from './theme'

const App = () => {
    return <ChakraProvider theme={theme}>
        <Page />
    </ChakraProvider>
}

export default App;