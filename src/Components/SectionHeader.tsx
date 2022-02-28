import * as React from "react";
import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import { IconType } from "react-icons";

interface Props {
    icon: IconType
    title: string
}

const SectionHeader: React.FC<Props> = ({
    icon, title
}) => {
    return (
        <Flex width="100%" justify="flex-start" bg="gray.100" align="center" py={2}>
            <Box px={10}>
                <Icon as={icon} w={10} h={10}></Icon>
            </Box>

            <Text fontSize="xl" fontWeight={700}>{title}</Text>
        </Flex>

    )
}

export default SectionHeader;