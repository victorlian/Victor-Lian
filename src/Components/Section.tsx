import * as React from "react";
import { Flex, VStack } from '@chakra-ui/react'
import SectionHeader from "./SectionHeader";
import { IconType } from "react-icons";
import TimePeriodItem from "./TimePeriodItem";


interface Props {
    icon: IconType
    title: string
}

const Section: React.FC<Props> = ({
    icon,
    title
}) => {
    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={icon} title={title} />
            <TimePeriodItem start="hi" end="bye" title="what a wonderful job" subTitle="what the heck was going on"> Tix </TimePeriodItem>
        </VStack>
    )
}

export default Section;