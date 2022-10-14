import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

export default function alertSideBox() {
    return (
        <>
            <Alert status="warning" className="mt-3">
                <AlertIcon />
                <AlertTitle>配料也要喔!!</AlertTitle>
            </Alert>
        </>
    )
}
