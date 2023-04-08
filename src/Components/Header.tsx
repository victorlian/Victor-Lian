import * as React from "react";
import { Box, Flex, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import NavButton from "./NavButton";

interface Props {}

const Header: React.FC<Props> = ({

}) => {
    return (
        <Flex width="100%" justify="center">
            <HStack width="75%" justify="space-between" padding={4}>
                <VStack>
                    <Text color='blue.500' fontSize='3xl'>Victor Lian</Text>
                    <Text >Software Developer</Text>
                </VStack>
                <VStack>
                    <HStack>
                        <Icon as={icon} w={8} h={8} color="blue.500"></Icon>
                    </HStack>
                </VStack>
            </HStack>
        </Flex>

    )
}

export default Header;