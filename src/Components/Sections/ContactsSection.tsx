import * as React from "react";
import { VStack, UnorderedList, ListItem, Flex } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaPhone } from "react-icons/fa";

interface Props {
}

const InterestsSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center" mt={3}>
            <SectionHeader icon={FaPhone} title={"Contacts"}  />
            <Flex width="100%" justify="flex-start" >
                <UnorderedList listStylePos="inside" textAlign="left" pl={2}>
                    <ListItem> victorlian97@gmail.com </ListItem>
                </UnorderedList>
            </Flex>
        </VStack>
    )
}

export default InterestsSection;