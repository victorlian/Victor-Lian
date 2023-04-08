import { HStack } from "@chakra-ui/react";
import * as React from "react";
import NavButton from "../NavButton";


interface Props {
}

const NavSection: React.FC<Props> = ({
}) => {
    return (
        <HStack padding={5} bg="blue.100" width="100%" justify="space-around">
            <NavButton>Intro</NavButton>
            <NavButton>Education</NavButton>
            <NavButton>Experience</NavButton>
            <NavButton>Skills</NavButton>
            <NavButton>Interests</NavButton>
            <NavButton>Contacts</NavButton>
        </HStack>
    )
}

export default NavSection;