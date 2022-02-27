import * as React from "react";
import { Flex, Text } from '@chakra-ui/react'
import NavButton from "./NavButton";

interface Props {}

const Header: React.FC<Props> = ({

}) => {
    return (
        <Flex width="100%" justify="center">
            <Flex textAlign="center" width="75%" bg="black" justify="space-evenly" align="center" padding={5}>
                <Text color='blue.400' fontSize='3xl'>Victor Lian</Text>
                <NavButton>Intro</NavButton>
                <NavButton>Education</NavButton>
                <NavButton>Experience</NavButton>
                <NavButton>Skills</NavButton>
                <NavButton>Interests</NavButton>
                <NavButton>Contacts</NavButton>
            </Flex>
        </Flex>

    )
}

export default Header;