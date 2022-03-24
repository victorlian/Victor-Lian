import * as React from "react";
import { VStack, Box, UnorderedList, ListItem, Flex } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaBookReader } from "react-icons/fa";

interface Props {
}

const InterestsSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={FaBookReader} title={"Personal Skills"} />
            <Flex width="100%" justify="flex-start" >
                <UnorderedList listStylePos="inside" textAlign="left" pl={2}>
                    <ListItem> Fluent in written and spoken Mandarin Chinese (at Native proficiency level) </ListItem>
                    <ListItem> A quick learner with strong desire to learn new technologies </ListItem>
                    <ListItem> Ability to work independently as well as in a team </ListItem>
                    <ListItem> Excellent problem-solving and research skills </ListItem>
                    <ListItem> Excellent written and verbal communication skills </ListItem>
                </UnorderedList>
            </Flex>
        </VStack>
    )
}

export default InterestsSection;