import * as React from "react";
import { Flex, Text, VStack } from '@chakra-ui/react'
import SectionHeader from "./SectionHeader";
import { IconType } from "react-icons";


interface Props {
    start: string
    end: string
    title?: string
    subTitle?: string
}

const TimePeriodItem: React.FC<Props> = ({
    start, end, title, subTitle
}) => {
    return (
        <Flex width="100%" justify="flex-start" py={2}>
            <Flex width={40} justify="center">
                <Text fontWeight={600}> {start} - {end} </Text>
            </Flex>
            <VStack width="100%" align="flex-start">
                <Text fontWeight={600}> {title} </Text>
                <Text fontWeight={200}> {subTitle} </Text>
                <Text align="justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
            </VStack>
        </Flex>
    )
}

export default TimePeriodItem;