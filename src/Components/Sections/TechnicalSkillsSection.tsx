import * as React from "react";
import { Progress, VStack, Text, Grid, GridItem, HStack } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaTools } from "react-icons/fa";
import SkillProgress from "../SkillProgress";

interface Props {
}

const SkillsSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={FaTools} title={"Technical Skills"} />
            <VStack width="100%" justify="center">  {/* Using VStack + Stack is easier than Grid */}
                <HStack width="100%" gap={3}>
                    <SkillProgress label='C#' value={80} />
                    <SkillProgress label='PHP (laravel)' value={90} />
                    <SkillProgress label='Java' value={75} />
                </HStack>
                <HStack width="100%" gap={3}>
                    <SkillProgress label='ReactJS' value={85} />
                    <SkillProgress label='SQL' value={80} />
                    <SkillProgress label='AWS' value={80} />
                </HStack>
                <HStack width="100%" gap={3}>
                    <SkillProgress label='Linux/Bash' value={70} />
                    <SkillProgress label='Scrum' value={70} />
                    <SkillProgress label='Architecture' value={70} />
                </HStack>
            </VStack>
        </VStack>
    )
}

export default SkillsSection;