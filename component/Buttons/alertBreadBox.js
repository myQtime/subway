import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

export default function alertBreadBox() {
    return (
        <>
            <Alert status="warning" className="mt-3">
                <AlertIcon />
                <AlertTitle>請先選擇麵包喔!!</AlertTitle>
            </Alert>
        </>
    )
}
