import * as React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'
import Header from "./Components/Header";
import EducationSection from "./Components/Sections/EducationSection";
import WorkSection from "./Components/Sections/WorkSection";
import TechnicalSkillsSection from "./Components/Sections/TechnicalSkillsSection";
import PersonalSkillsSection from "./Components/Sections/PersonalSkillsSection";

interface Props {
    
}

const Page: React.FC<Props> = ({

}) => {
    return (
        <>
            <Header />
            <Flex width="100%" justify="center">
                <Box textAlign="center" width="75%">
                    <EducationSection />
                    <WorkSection />
                    <TechnicalSkillsSection />
                    <PersonalSkillsSection />
                </Box>
            </Flex>
        </>
    )
}

export default Page;