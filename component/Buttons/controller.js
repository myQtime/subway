import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function controller() {
    return (
        <>
            <div className="controller">
                <Stack spacing={4} direction="row" align="center" w="100%" className="mt-3 justify-content-between">
                    <Button
                        className="rounded-circle playBtn"
                        size="md"
                        onClick={() => {
                            alert('播放')
                        }}
                    ></Button>
                    <Button
                        className="rounded-circle pauseBtn"
                        size="md"
                        onClick={() => {
                            alert('暫停')
                        }}
                    ></Button>
                    <Button
                        className="rounded-circle downloadBtn"
                        size="md"
                        onClick={() => {
                            alert('下載')
                        }}
                    ></Button>
                    <Button
                        className="rounded-pill redoBtn text-white"
                        size="md"
                        w="50%"
                        onClick={() => {
                            alert('重新製作')
                        }}
                    >
                        重新製作
                    </Button>
                </Stack>
            </div>
        </>
    )
}
