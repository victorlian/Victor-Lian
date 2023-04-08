import * as React from "react";
import { Button } from '@chakra-ui/react'

interface Props {}

const NavButton: React.FC<Props> = ({
    children
}) => {
    return (
        <Button colorScheme='black' variant='link'>{children}</Button>
    )
}

export default NavButton;