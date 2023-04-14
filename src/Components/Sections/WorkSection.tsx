import * as React from "react";
import { Link, Flex, VStack, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
import { FaSuitcase } from "react-icons/fa";
import TimePeriodItem from "../TimePeriodItem";


interface Props {
}

const WorkSection: React.FC<Props> = ({
}) => {
    return (
        <VStack width="100%" justify="center">
            <SectionHeader icon={FaSuitcase} title={"Work Experience"} />
            <TimePeriodItem start="Mar 2020" end="Present">
                <VStack justify="space-between" align="flex-start" width="100%" pl={2}>
                    <Text fontWeight={600}> Software Developer, MEA Mobile Ltd. </Text>
                    <Text fontWeight={200} as='i'> Skills: PHP (laravel), ReactJS, TypeScript, AWS, MySQL, AngularJS, RESTful API, Git, Code Reviews, Scalable Code  </Text>
                    <Flex justify="flex-start">
                        <UnorderedList listStylePos="inside" textAlign="left">
                            <ListItem> Back-end development: developing and maintaining a central server responsible for handling requests from hundreds of different web and mobile applications </ListItem>
                            <UnorderedList listStylePos="inside" textAlign="left" listStyleType="circle">
                                <ListItem> Server is written in PHP (laravel) with a front-end admin site written in blade templates and AngularJS </ListItem>
                                <ListItem> Integrating server with multiple AWS services including EC2, S3, RDS, SQS, SMS, CloudWatch, Auto-scaling etc. </ListItem>
                                <ListItem> Developing scalable code to handle thousands of orders per minute with higher peaks on promotional days </ListItem>
                            </UnorderedList>
                            <ListItem> Front-end development: developing and maintaining a web app builder responsible for creating sites for different brands
                                <UnorderedList listStylePos="inside" textAlign="left" listStyleType="circle">
                                    <ListItem> Web app builder written in React (16.8+) with Chakara UI </ListItem>
                                    <ListItem> Integrating the web app with the server through RESTful API calls </ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem> Deploying and monitoring apps in the AWS cloud </ListItem>
                            <ListItem> Performing code reviews, writing API documentation (OpenAPI) </ListItem>
                        </UnorderedList>
                    </Flex>
                </VStack>
            </TimePeriodItem>

            <TimePeriodItem start="Nov 2017" end="Feb 2018">
                <VStack justify="space-between" align="flex-start" width="100%" pl={2} textAlign="left">
                    <Text fontWeight={600}> Intern Developer, Vista Entertainment Solutions </Text>
                    <Text fontWeight={200} as='i'> Skills: C#.NET, SQL Server, Azure, ReactJS, Requirements, Scrum</Text>
                    <Flex justify="flex-start">
                        <UnorderedList listStylePos="inside" textAlign="left">
                            <ListItem> Worked as a team member in a Scrum development team </ListItem>
                            <UnorderedList listStylePos="inside" textAlign="left" listStyleType="circle">
                                <ListItem> Maintaining existing software written in C#.NET </ListItem>
                                <ListItem> Attended regular sprint meetings in determining priority and size of sprint items </ListItem>
                            </UnorderedList>
                            <ListItem> Developed a new web-based internal application </ListItem>
                            <UnorderedList listStylePos="inside" textAlign="left" listStyleType="circle">
                                <ListItem> Eliciting requirements from developers and managers </ListItem>
                                <ListItem> Design the software architecture of the tool and developed the application incrementally using scrum methodologies </ListItem>
                            </UnorderedList>
                        </UnorderedList>
                    </Flex>
                </VStack>
            </TimePeriodItem>

            <TimePeriodItem start="Mar 2017" end="Nov 2019">
                <VStack justify="space-between" align="flex-start" width="100%" pl={2}>
                    <Text fontWeight={600}> Graduate Teaching Assistant, University of Auckland </Text>
                    <Text fontWeight={200} as='i'> Skills: Java, C++, OOP Design </Text>
                    <Flex justify="flex-start">
                        <UnorderedList listStylePos="inside" textAlign="left">
                            <ListItem> Helped developing course related material, set and mark assignments, labs and quizzes </ListItem>
                            <ListItem> Deliver supplement sessions including tutorials and office hours </ListItem>
                        </UnorderedList>
                    </Flex>
                </VStack>
            </TimePeriodItem>
        </VStack>
    )
}

export default WorkSection;