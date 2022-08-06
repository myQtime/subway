import Image from 'next/image'

import SubscribeImage from '../img/Subscribe.jpeg'

import { useState } from 'react'
import { Box, Input, InputGroup, InputRightElement, Button, Flex, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function home() {
    return (
        <>
            <div className="subscribe bg-green py-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-7 cursor-default ">
                            <div className="w-100 h-100 position-relative">
                                <Image src={SubscribeImage} layout="fill" objectFit="cover" placeholder="blur"></Image>
                            </div>
                        </div>

                        <div className="col-5 cursor-default">
                            <h2 className="fs-1 color-text-title-yellow mb-4">Subscribe</h2>
                            <h1 className="fs-1 color-text-white mb-4">每個月來一場自在旅行</h1>
                            <p className="fs-5 color-text-white-50  mb-4">
                                如果您願意收到每月的旅遊資訊，一起感受台灣旅行的美好。
                            </p>

                            <Box w="100%" className="pb-4">
                                <InputGroup size="lg" h="65px">
                                    <Input
                                        h="65px"
                                        pr="5rem"
                                        type="email"
                                        placeholder="youremail@example.com"
                                        bg="transparent"
                                        className="inputEmail color-text-white-50"
                                    />
                                    <InputRightElement width="25%" height="100%">
                                        <Button className="bg-transparent py-3 px-2" width="60%" h="100%" size="sm">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 15 16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M14.8096 0.682022C14.7252 0.598067 14.6187 0.53994 14.5024 0.514476C14.3862 0.489011 14.2651 0.497266 14.1533 0.538272L0.403345 5.53827C0.284763 5.58325 0.18267 5.66324 0.110627 5.76762C0.0385841 5.872 0 5.99582 0 6.12265C0 6.24947 0.0385841 6.3733 0.110627 6.47768C0.18267 6.58205 0.284763 6.66204 0.403345 6.70702L6.40334 9.10702L8.80334 15.107C8.84844 15.2204 8.92573 15.3181 9.02568 15.3881C9.12564 15.458 9.24389 15.4972 9.36584 15.5008C9.49215 15.4982 9.6147 15.4574 9.71735 15.3837C9.82 15.3101 9.89792 15.2071 9.94084 15.0883L14.9408 1.33827C14.9834 1.22769 14.9937 1.10729 14.9705 0.991099C14.9472 0.874907 14.8914 0.767715 14.8096 0.682022ZM9.36584 13.1258L7.62209 8.75077L10.6158 5.75702L9.73459 4.87577L6.71584 7.89452L2.36585 6.12577L13.3221 2.16952L9.36584 13.1258Z" />
                                            </svg>
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
