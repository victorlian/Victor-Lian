import * as React from "react";
import { Flex, Text, VStack, Box } from '@chakra-ui/react'
import SectionHeader from "./SectionHeader";
import { IconType } from "react-icons";


interface Props {
    start: string
    end: string
}

const TimePeriodItem: React.FC<Props> = ({
    start, end, children
}) => {
    return (
        <Flex width="100%" justify="flex-start" py={2}>
            <VStack width="12%" justify="flex-start" align="flex-start" pl={4}>
                <Text fontWeight={600}> {start} - </Text>
                <Text fontWeight={600}> {end} </Text>
            </VStack>
            <Flex width="90%" justify="flex-start">
                {children}
            </Flex>
        </Flex>
    )
}

// Software Developer, MEA Mobile Ltd
// Skills: PHP - Laravel, ReactJS, TypeScript, AWS, MySQL, AngularJS, RESTful API, Git
// thousands of orders every minute, >100k requests. Orders around 10k each day for up to 60k on peak
// code reviews, documentation (openAPI)
// Scalable code

export default TimePeriodItem;