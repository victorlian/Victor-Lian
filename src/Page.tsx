import * as React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'
import Header from "./Components/Header";
import { FaGraduationCap } from "react-icons/fa";
import Section from "./Components/Section";

interface Props {
    
}

const Page: React.FC<Props> = ({

}) => {
    return (
        <>
            <Header />
            <Flex width="100%" justify="center">
                <Box textAlign="center" width="75%">
                    <Section icon={FaGraduationCap} title="Education" />
                </Box>
            </Flex>
        </>
    )
}

export default Page;