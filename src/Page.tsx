import * as React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'
import Header from "./Components/Header";
import EducationSection from "./Components/Sections/EducationSection";
import WorkSection from "./Components/Sections/WorkSection";
import TechnicalSkillsSection from "./Components/Sections/TechnicalSkillsSection";
import PersonalSkillsSection from "./Components/Sections/PersonalSkillsSection";
import InterestsSection from "./Components/Sections/InterestsSection";
import NavSection from "./Components/Sections/NavSection";

interface Props {
    
}

const Page: React.FC<Props> = ({

}) => {
    return (
        <>
            <Header />
            <Flex width="100%" justify="center" pb={10}>
                <Box width="75%">
                    <NavSection />
                    <EducationSection />
                    <WorkSection />
                    <TechnicalSkillsSection />
                    <PersonalSkillsSection />
                    <InterestsSection />
                </Box>
            </Flex>
        </>
    )
}

export default Page;