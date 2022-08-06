import { useState } from 'react'
import Image from 'next/image'
import logo from '../img/20211102_logo-02.png'
import FoodMenu from './headerMenu/foodMenu'
import AttractionMenu from './headerMenu/attractionMenu'
import ActivityMenu from './headerMenu/activityMenu'
import AccomMenu from './headerMenu/accomMenu'

import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap'
// import 'react-bootstrap'

export default function header({ children }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <div className="container">
                <div className="row  justify-content-between  align-items-center  position-relative ">
                    <Button
                        className="d-md-none invisible mx-2"
                        variant="primary"
                        onClick={handleShow}
                        style={{ width: '40px', height: '40px' }}
                    ></Button>
                    <div className="logo col-5 col-md col-lg-3 pb-md-3">
                        <Image src={logo}></Image>
                    </div>
                    <div className="menu col-7 col-lg-6 p-0 d-none d-md-block">
                        <div className="row">
                            <div className="col-3 p-0 ">
                                <div className="nev-menu">
                                    <AttractionMenu />
                                    <button
                                        type="button"
                                        className=" btn btn-link shadow-none color-text text-decoration-none position-relative"
                                    >
                                        <p className="m-0 fs-6">找景點</p>
                                        <p className=" m-0 fs-6">Attraction</p>
                                    </button>
                                </div>
                            </div>
                            <div className="col-3 p-0 ">
                                <div className="nev-menu">
                                    <FoodMenu />
                                    <button
                                        type="button"
                                        className="btn btn-link shadow-none color-text text-decoration-none position-relative "
                                    >
                                        <p className="m-0 fs-6">找美食</p>
                                        <p className=" m-0 fs-6">delicacy</p>
                                    </button>
                                </div>
                            </div>
                            <div className="col-3 p-0 ">
                                <div className="nev-menu">
                                    <ActivityMenu />
                                    <button
                                        type="button"
                                        className="btn btn-link shadow-none color-text text-decoration-none position-relative "
                                    >
                                        <p className="m-0 fs-6">找活動</p>
                                        <p className=" m-0 fs-6">Activity</p>
                                    </button>
                                </div>
                            </div>
                            <div className="col-3 p-0 ">
                                <div className="nev-menu">
                                    <AccomMenu />
                                    <button
                                        type="button"
                                        className="btn btn-link shadow-none color-text text-decoration-none position-relative "
                                    >
                                        <p className="m-0 fs-6">找住宿</p>
                                        <p className=" m-0 fs-6">Accom.</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tools col col-lg-3  d-none  d-md-flex justify-content-end">
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="color-menu-icon-stroke mx-2"
                        >
                            <path
                                d="M9.6264 2.2843L10.158 1.75522L9.62824 2.28613L10.4606 3.11669L10.9916 3.64644L11.5213 3.11551L12.3391 2.29587C12.3394 2.29559 12.3397 2.29532 12.3399 2.29505C12.8251 1.8122 13.4006 1.42964 14.0336 1.1692C14.667 0.908622 15.3455 0.775419 16.0304 0.777205C16.7153 0.778991 17.3931 0.915733 18.0251 1.17961C18.6571 1.44349 19.2309 1.82934 19.7138 2.31511L19.7165 2.31785C20.6948 3.29198 21.2464 4.61467 21.25 5.99526C21.2536 7.37533 20.7094 8.7004 19.7368 9.67953C19.7365 9.67989 19.7361 9.68026 19.7357 9.68063L11.1514 18.2594L11.1513 18.2595C11.1201 18.2908 11.0777 18.3083 11.0335 18.3083C10.9892 18.3083 10.9468 18.2908 10.9156 18.2595L2.2856 9.62771L2.28429 9.62641C1.30549 8.6522 0.753624 7.32918 0.750018 5.94819C0.746413 4.56794 1.29079 3.24272 2.26353 2.26356C3.24268 1.2908 4.56792 0.746413 5.94819 0.750018C7.32917 0.753624 8.6522 1.30549 9.6264 2.2843Z"
                                strokeWidth="1.5"
                            />
                        </svg>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="color-menu-icon-fill mx-2"
                        >
                            <path d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10 1.667C5.405 1.667 1.667 5.405 1.667 10C1.667 14.595 5.405 18.333 10 18.333C14.595 18.333 18.333 14.595 18.333 10C18.333 5.405 14.595 1.667 10 1.667ZM10 13.5C10.2652 13.5 10.5196 13.6054 10.7071 13.7929C10.8946 13.9804 11 14.2348 11 14.5C11 14.7652 10.8946 15.0196 10.7071 15.2071C10.5196 15.3946 10.2652 15.5 10 15.5C9.73478 15.5 9.48043 15.3946 9.29289 15.2071C9.10536 15.0196 9 14.7652 9 14.5C9 14.2348 9.10536 13.9804 9.29289 13.7929C9.48043 13.6054 9.73478 13.5 10 13.5ZM10 4.75C10.7293 4.75 11.4288 5.03973 11.9445 5.55546C12.4603 6.07118 12.75 6.77065 12.75 7.5C12.75 8.51 12.453 9.074 11.699 9.859L11.53 10.03C10.908 10.652 10.75 10.916 10.75 11.5C10.75 11.6989 10.671 11.8897 10.5303 12.0303C10.3897 12.171 10.1989 12.25 10 12.25C9.80109 12.25 9.61032 12.171 9.46967 12.0303C9.32902 11.8897 9.25 11.6989 9.25 11.5C9.25 10.49 9.547 9.926 10.301 9.141L10.47 8.97C11.092 8.348 11.25 8.084 11.25 7.5C11.249 7.18028 11.1255 6.8731 10.9049 6.64165C10.6843 6.4102 10.3834 6.27208 10.0641 6.25568C9.7448 6.23929 9.43135 6.34587 9.18822 6.55351C8.94509 6.76115 8.79077 7.05406 8.757 7.372L8.75 7.5C8.75 7.69891 8.67098 7.88968 8.53033 8.03033C8.38968 8.17098 8.19891 8.25 8 8.25C7.80109 8.25 7.61032 8.17098 7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5C7.25 6.77065 7.53973 6.07118 8.05546 5.55546C8.57118 5.03973 9.27065 4.75 10 4.75Z" />
                        </svg>
                    </div>

                    <Button
                        className="d-md-none mx-2"
                        variant="primary"
                        onClick={handleShow}
                        style={{ width: '40px', height: '40px' }}
                    ></Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like,
                            text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </>
    )
}
