import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function controller() {
    return (
        <>
            <div className="controller">
                <Stack
                    spacing={4}
                    direction="row"
                    align="center"
                    w="100%"
                    className="mt-3 justify-content-around justify-content-xl-between px-0 px-sm-3 px-xl-0"
                >
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
                            alert('停止')
                        }}
                    ></Button>
                    <Button
                        className="rounded-pill redoBtn text-white"
                        size="md"
                        onClick={() => {
                            alert('用此音樂拍攝Reels')
                        }}
                    >
                        用此音樂拍攝Reels
                    </Button>
                </Stack>
            </div>
        </>
    )
}
