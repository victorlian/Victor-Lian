import * as React from "react";
import { Flex, Text, Box, Icon, Divider } from '@chakra-ui/react'
import { IconType } from "react-icons";

interface Props {
    icon: IconType
    title: string
}

const SectionHeader: React.FC<Props> = ({
    icon, title
}) => {
    return (
        <Flex width="100%" justify="flex-start" align="center" py={1}>
            <Box px={10}>
                <Icon as={icon} w={8} h={8} color="blue.500"></Icon>
            </Box>
            <Text fontSize="xl" fontWeight={700}>{title}</Text>
            <Flex pl={5} flexGrow={1}>
                <Divider borderWidth={1} />
            </Flex>
        </Flex>
    )
}

export default SectionHeader;