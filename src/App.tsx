import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import Page from "./Page";

const App = () => {
    return <ChakraProvider>
        <Page />
    </ChakraProvider>
}

export default App;