import * as React from "react";
import { Progress, VStack, Text, Grid, GridItem, HStack } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaTools } from "react-icons/fa";
import SkillProgress from "../SkillProgress";

interface Props {
    isPrinting: boolean
}

const SkillsSection: React.FC<Props> = ({ isPrinting }) => {
    return (
        <VStack width="100%" justify="center" pt={isPrinting ? "150px" : 0}> {/* pt is used to offset the printing page */}
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