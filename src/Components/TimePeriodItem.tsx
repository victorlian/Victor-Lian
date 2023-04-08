import * as React from "react";
import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'

interface Props {
    start: string
    end: string
}

const TimePeriodItem: React.FC<Props> = ({
    start, end, children
}) => {
    return (
        <HStack width="100%" justify="flex-start" align="flex-start" py={2}>
            <VStack width="120px" height="100%" justify="flex-start" align="flex-start" pl={4}>
                <Text fontWeight={600}> {start} - </Text>
                <Text fontWeight={600}> {end} </Text>
            </VStack>


            <Flex width="90%" justify="flex-start" borderLeft="1px" borderColor="gray.200" pl={2}>
                {children}
            </Flex>

        </HStack>        
    )
}

export default TimePeriodItem;