import * as React from "react";
import { Link, Flex, VStack, Text, UnorderedList, ListItem, Image, HStack } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaGraduationCap } from "react-icons/fa";
import TimePeriodItem from "../TimePeriodItem";


interface Props {
}

const EducationSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={FaGraduationCap} title={"Education"} />
            <TimePeriodItem start="Mar 2019" end="Feb 2020">
                <VStack justify="space-between" align="flex-start" width="100%" pl={2}>
                    <Text fontWeight={600}> Univeristy of Auckland </Text>
                    <Text fontWeight={200} as='i'> Master of Engineering with First class honours</Text>
                    <Flex justify="flex-start">
                        <UnorderedList listStylePos="inside" textAlign="left">
                            <ListItem> Specialising in Software Engineering </ListItem>
                            <ListItem> Research Master with paper published in IEEE transactions on Learning Technologies </ListItem>
                            <UnorderedList listStylePos="inside" textAlign="left" listStyleType="circle">
                                <ListItem> Paper title: Learning Object-Oriented Programming Concepts Through Visual Analogies </ListItem>
                                <ListItem> Accessible from <Link color="blue.400" href='https://ieeexplore.ieee.org/document/9722963' isExternal> https://ieeexplore.ieee.org/document/9722963 </Link> 
                                </ListItem>
                            </UnorderedList>
                            <ListItem> University of Auckland Research Masters Scholarship </ListItem>
                        </UnorderedList>
                    </Flex>
                </VStack>
            </TimePeriodItem>

            <TimePeriodItem start="Mar 2015" end="Dec 2018">
                <VStack justify="space-between" align="flex-start" width="100%" pl={2}>
                    <Text fontWeight={600}> Univeristy of Auckland </Text>
                    <Text fontWeight={200} as='i'> Bachelor of Engineering (Honours) with First class honours</Text>
                    <Flex justify="flex-start">
                        <UnorderedList listStylePos="inside" textAlign="left">
                            <ListItem> Specialising in Software Engineering </ListItem>
                            <ListItem> GPA: 8.656 / 9 </ListItem>
                            <ListItem> 8 First in Course Awards: Enggen131, Softeng251, Softeng351, Compsci367, etc... </ListItem>
                            <ListItem> Dean's Honours List for 4 years</ListItem>
                        </UnorderedList>
                    </Flex>
                </VStack>
            </TimePeriodItem>
            <TimePeriodItem start="Mar 2023" end="Present">
                <HStack>
                    <Image height="10vh" src="/aws-certified-cloud-practitioner.png" />
                    <Text> AWS Certified Cloud Practioner </Text>
                </HStack>
            </TimePeriodItem>
        </VStack>
    )
}

export default EducationSection;