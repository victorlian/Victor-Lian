import * as React from "react";
import { Box, Flex, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <Flex width="100%" justify="center">
            <HStack width="75%" justify="space-between" padding={4}>
                <VStack>
                    <Text color='blue.500' fontSize='3xl'>Victor Lian</Text>
                    <Text >Software Developer</Text>
                </VStack>
                <VStack alignItems="stretch">
                    <HStack>
                        <Icon as={PhoneIcon} w={6} h={6} color="blue.500"></Icon>
                        <Text>+64 2102387434</Text>
                    </HStack>
                    <HStack>
                        <Icon as={EmailIcon} w={6} h={6} color="blue.500"></Icon>
                        <Text>victorlian97@gmail.com</Text>
                    </HStack>               
                </VStack>
            </HStack>
        </Flex>

    )
}

export default Header;