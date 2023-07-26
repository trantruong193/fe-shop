import React from 'react';
import {Col, Row, Stack} from "react-bootstrap";
import {Button, Divider, Input} from "antd";
import {ClockCircleOutlined, CompassOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import wifi from "../assets/logo/wifi.png";
import facebook from "../assets/logo/facebook.png";
import twitter from "../assets/logo/twitter.png";
import instagram from "../assets/logo/instagram.png";
import youtube from "../assets/logo/youtube.png";

const Footer = () => {
    return (
        <>
            <Row className='mt-5'>
                <Divider/>
            </Row>
            <Row className='px-5 py-5'>
                <Col>
                    <h5 className='fw-bold'>Contact Us</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.
                    </p>
                    <div className='d-flex align-items-center mb-1'>
                        <CompassOutlined /><span className='ms-2'>715 Fake Street, New York 10021 USA</span>
                    </div>
                    <div className='d-flex align-items-center mb-1'>
                        <MailOutlined /><span className='ms-2'>stroyka@example.com</span>
                    </div>
                    <div className='d-flex align-items-center mb-1'>
                        <PhoneOutlined /><span className='ms-2'>(800) 060-0730, (800) 060-0730</span>
                    </div>
                    <div className='d-flex align-items-center mb-1'>
                        <ClockCircleOutlined /><span className='ms-2'>Mon-Sat 10:00pm - 7:00pm</span>
                    </div>
                </Col>
                <Col>
                    <Row>
                        <Col className='d-flex flex-column'>
                            <h5 className='fw-bold'>Information</h5>
                            <span>About Us</span>
                            <span>Delivery Information</span>
                            <span>Privacy Policy</span>
                            <span>Brands</span>
                            <span>Contact Us</span>
                            <span>Returns</span>
                            <span>Site Map</span>
                        </Col>
                        <Col className='d-flex flex-column'>
                            <h5 className='fw-bold'>My Account</h5>
                            <span>Store Location</span>
                            <span>Order History</span>
                            <span>Wish List</span>
                            <span>News Letter</span>
                            <span>Specials</span>
                            <span>Gift Certificates</span>
                            <span>Affiliate</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h5 className='fw-bold'>News Letter</h5>
                    <p>Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.</p>
                    <div className='d-flex'>
                        <Input placeholder='Email Address...'/>
                        <Button className="bg-warning ms-2" type='ghost'>Subscribe</Button>
                    </div>
                    <p className='mt-3'>Follow us on social network</p>
                    <Stack gap={3} direction='horizontal'>
                        <img src={wifi} style={{width: 35, height: 35}} alt=''/>
                        <img src={facebook} style={{width: 35, height: 35}} alt=''/>
                        <img src={twitter} style={{width: 35, height: 35}} alt=''/>
                        <img src={instagram} style={{width: 35, height: 35}} alt=''/>
                        <img src={youtube} style={{width: 35, height: 35}} alt=''/>
                    </Stack>
                </Col>
            </Row>
        </>
    );
};

export default Footer;