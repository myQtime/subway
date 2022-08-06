import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function playType() {
    return (
        <>
            <div className="playType">
                <Stack spacing={4} direction="row" align="center" w="100%" className="justify-content-between mt-3">
                    <Button size="sm" w="20%" className="rounded-pill">
                        EDN
                    </Button>
                    <Button size="sm" w="20%" className="rounded-pill">
                        LIP HOP
                    </Button>
                    <Button size="sm" w="20%" className="rounded-pill">
                        JAZZ
                    </Button>
                    <Button size="sm" w="20%" className="rounded-pill">
                        ROCK
                    </Button>
                </Stack>
            </div>
        </>
    )
}
