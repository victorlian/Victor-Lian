import * as React from "react";
import { Progress, VStack, Text, Flex, Box } from '@chakra-ui/react'

interface Props {
    label: string
    value: number
}

const SkillProgress: React.FC<Props> = ({
    label, value
}) => {
    return (
        <VStack width="100%" spacing={1} align="strech" padding={5}>
            <Flex width="100%" align="flex-start">
               <Text> {label} </Text>
            </Flex>
            <Box width="100%" py={1}>
                <Progress colorScheme='blue' size='md' value={value} />
            </Box>
        </VStack>
    )
}

export default SkillProgress;