import * as React from "react";
import { VStack, Box, UnorderedList, ListItem, Flex } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaTableTennis } from "react-icons/fa";

interface Props {
}

const InterestsSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center" mt={3}>
            <SectionHeader icon={FaTableTennis} title={"Interests"}  />
            <Flex width="100%" justify="flex-start" >
                <UnorderedList listStylePos="inside" textAlign="left" pl={2}>
                    <ListItem> Board games </ListItem>
                    <ListItem> Chinese chess, GO, Bridge </ListItem>
                    <ListItem> Badminton </ListItem>
                </UnorderedList>
            </Flex>
        </VStack>
    )
}

export default InterestsSection;