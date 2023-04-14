import React, {useRef, useEffect, useState} from "react";
import { Flex, Text, Box, Button, Link } from '@chakra-ui/react'
import Header from "./Components/Header";
import EducationSection from "./Components/Sections/EducationSection";
import WorkSection from "./Components/Sections/WorkSection";
import TechnicalSkillsSection from "./Components/Sections/TechnicalSkillsSection";
import PersonalSkillsSection from "./Components/Sections/PersonalSkillsSection";
import InterestsSection from "./Components/Sections/InterestsSection";
import ReactToPrint, { useReactToPrint } from 'react-to-print';

interface Props {
    
}

const Page: React.FC<Props> = ({

}) => {
    const componentRef = useRef(null);
    const [isPrinting, setIsPrinting] = useState(false);
    
    // We store the resolve Promise being used in `onBeforeGetContent` here
    const promiseResolveRef = useRef<any>(null);
    // We watch for the state to change here, and for the Promise resolve to be available
    useEffect(() => {
      if (isPrinting && promiseResolveRef.current) {
        // Resolves the Promise, letting `react-to-print` know that the DOM updates are completed
        promiseResolveRef.current();
      }
    }, [isPrinting]);
    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onBeforeGetContent: () => {
        return new Promise((resolve) => {
          promiseResolveRef.current = resolve;
          setIsPrinting(true);
        });
      },
      onAfterPrint: () => {
        // Reset the Promise resolve so we can print again
        promiseResolveRef.current = null;
        setIsPrinting(false);
      }
    });

    const marginTop = "30px";
    const marginRight = "0px";
    const marginBottom = "30px";
    const marginLeft = "0px";
    const getPageMargins = () => {
        return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
    };

    return (
        <Box>
            <Flex justify="flex-end" pr="3vh">
                <Button onClick={handlePrint} variant="link" colorScheme="blue"> Print / Save As Pdf </Button>
            </Flex>
            <Box ref={componentRef} py={10}>
                <style> {getPageMargins()}</style>
                    <Header/>
                    <Flex width="100%" justify="center" pb={10}>
                        <Box width="75%">
                            <EducationSection />
                            <WorkSection />
                            <TechnicalSkillsSection isPrinting={isPrinting}/>
                            <PersonalSkillsSection />
                            <InterestsSection />
                            <Flex justify="flex-end" pt="30px">
                                <Text>CV is availiable online at <Link color="blue.400" href='https://victorlian.github.io/Victor-Lian/' isExternal> https://victorlian.github.io/Victor-Lian/ </Link> </Text>
                            </Flex>
                        </Box>
                    </Flex>
            </Box>
        </Box>
    )
}

export default Page;