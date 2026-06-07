import * as React from "react";
import { Flex, VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import { FaSuitcase } from "react-icons/fa";
import TimePeriodItem from "../TimePeriodItem";

interface Props {}

const WorkSection: React.FC<Props> = () => {
    const visaWorkContent: React.ReactNode = (
        <VStack align="flex-start" width="100%" pl={2}>
            <Text fontWeight={600}>
                Software Engineer, Visa Inc.
            </Text>

            <Text fontWeight={200} as="i">
                Fullstack Development, .NET, React + TypeScript, SQL Server, Security Remediation, Accessibility, AI-assisted Development
            </Text>

            <Flex justify="flex-start">
                <UnorderedList listStylePos="inside" textAlign="left">
                    <ListItem>
                        Fullstack development of enterprise-grade applications using .NET backend and React + TypeScript frontend.
                    </ListItem>
                    <ListItem>
                        Led feature delivery in collaboration with cross-functional teams including Product, UX, DevOps, and Security.
                    </ListItem>
                    <ListItem>
                        Delivered security remediation work ensuring compliance with enterprise security standards and vulnerability fixes.
                    </ListItem>
                    <ListItem>
                        Built accessible web applications aligned with accessibility standards (e.g., WCAG compliance considerations).
                    </ListItem>
                    <ListItem>
                        Leveraged AI-assisted development workflows (e.g., Claude Code, Cline) to improve development speed and code quality.
                    </ListItem>
                </UnorderedList>
            </Flex>
        </VStack>
    );

    const meaWorkContent: React.ReactNode = (
        <VStack align="flex-start" width="100%" pl={2}>
            <Text fontWeight={600}>
                Software Developer, MEA Mobile Ltd.
            </Text>

            <Text fontWeight={200} as="i">
                PHP (Laravel), React, AWS, MySQL, AngularJS, REST APIs
            </Text>

            <UnorderedList listStylePos="inside" textAlign="left">
                <ListItem>
                    Fullstack development and maintenance of high-traffic backend systems and React-based web applications.
                </ListItem>
                <ListItem>
                    Integrated AWS services (EC2, S3, RDS, SQS, CloudWatch) and supported scalable production workloads.
                </ListItem>
            </UnorderedList>
        </VStack>
    );

    const vistaWorkContent: React.ReactNode = (
        <VStack align="flex-start" width="100%" pl={2}>
            <Text fontWeight={600}>
                Intern Developer, Vista Entertainment Solutions
            </Text>

            <Text fontWeight={200} as="i">
                C#.NET, SQL Server, Agile / Scrum
            </Text>

            <UnorderedList listStylePos="inside" textAlign="left">
                <ListItem>
                    Supported development of internal tools and participated in Agile sprint processes within a Scrum team.
                </ListItem>
            </UnorderedList>
        </VStack>
    );

    const taWorkContent: React.ReactNode = (
        <VStack align="flex-start" width="100%" pl={2}>
            <Text fontWeight={600}>
                Graduate Teaching Assistant, University of Auckland
            </Text>

            <Text fontWeight={200} as="i">
                Java, C++, OOP
            </Text>

            <UnorderedList listStylePos="inside" textAlign="left">
                <ListItem>
                    Supported teaching delivery through tutorials, marking, and student assistance in computer science courses.
                </ListItem>
            </UnorderedList>
        </VStack>
    );

    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={FaSuitcase} title={"Work Experience"} />
            <TimePeriodItem start="Sep 2023" end="Present">
                {visaWorkContent}
            </TimePeriodItem>
            <TimePeriodItem start="Mar 2020" end="Sep 2023">
                {meaWorkContent}
            </TimePeriodItem>
            <TimePeriodItem start="Nov 2017" end="Feb 2018">
                {vistaWorkContent}
            </TimePeriodItem>
            <TimePeriodItem start="Mar 2017" end="Nov 2019">
                {taWorkContent}
            </TimePeriodItem>
        </VStack>
    );
};

export default WorkSection;