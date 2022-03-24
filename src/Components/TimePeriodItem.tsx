import * as React from "react";
import { Flex, Text, VStack } from '@chakra-ui/react'

interface Props {
    start: string
    end: string
}

const TimePeriodItem: React.FC<Props> = ({
    start, end, children
}) => {
    return (
        <Flex width="100%" justify="flex-start" py={2}>
            <VStack width="120px" justify="flex-start" align="flex-start" pl={4}>
                <Text fontWeight={600}> {start} - </Text>
                <Text fontWeight={600}> {end} </Text>
            </VStack>
            <Flex width="90%" justify="flex-start">
                {children}
            </Flex>
        </Flex>
    )
}

export default TimePeriodItem;