import * as React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'
import Header from "./Components/Header";

interface Props {
    
}

const Page: React.FC<Props> = ({

}) => {
    return (
        <>
            <Header />
            <Flex width="100%" justify="center">
                <Box textAlign="center" width="75%" bg="blue.100">
                    <Text fontSize='4xl'>Victor Lian</Text>
                </Box>
            </Flex>
        </>
    )
}

export default Page;