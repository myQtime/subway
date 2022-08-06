import { useState } from 'react'
import { Box, Input, InputGroup, InputRightElement, Button, Flex, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function App() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Box w="30%" className="searchBar position-absolute start-50 translate-middle ">
                <InputGroup size="lg" h="65px">
                    <InputLeftElement h="65px">
                        <SearchIcon />
                    </InputLeftElement>

                    <Input h="65px" pr="5rem" type="text" placeholder="想去哪裡？" bg="#ffffff" />
                    <InputRightElement width="25%" h="65px">
                        <Button className="rounded-pill" width="70%" h="1.75rem" size="sm" onClick={handleClick}>
                            {'GO'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </>
    )
}
