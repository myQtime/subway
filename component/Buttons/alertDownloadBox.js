import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

export default function alertDownloadBox() {
    return (
        <>
            <Alert status="warning" className="mt-3">
                <AlertIcon />
                <AlertTitle>選擇麵包與配料現做你的音樂!</AlertTitle>
            </Alert>
        </>
    )
}
