import React from 'react';
import "./index.css";
import {Button, Divider, Dropdown, Space} from "antd";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {
    CaretDownOutlined, CaretLeftFilled, CaretRightFilled,
    CarOutlined, CompressOutlined, PhoneOutlined, SafetyCertificateOutlined,
    StarOutlined, TagsOutlined
} from "@ant-design/icons";
import slide from '../../../assets/product/slide-1.jpg'
import slide1 from '../../../assets/product/slide-2.jpg';
import slide2 from '../../../assets/product/slide-3.jpg';

import category from '../../../assets/product/category-3.jpg';
import category1 from '../../../assets/product/category-4.jpg';
import category2 from '../../../assets/product/category-5.jpg';
import category3 from '../../../assets/product/category-6.jpg';
import category4 from '../../../assets/product/category-1.jpg';
import category5 from '../../../assets/product/category-2.jpg';
import {categories, products} from "../../../assets/constant";

import Slide from "./Slide";
import ProductItem from "../../../components/ProductItem";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import News from "./News";

function Home() {

    // menu of Dropdown receive an object {items, onclick...}
    const categoriesMenu = categories.map(cat => {
        if (cat.items == null)
            return (<Row key={cat.id} className='dropdown_item py-2 ps-1 rounded-2'><span className='fw-bold' style={{fontSize: 14}}>{cat.title}</span></Row>)
        else{
            return (
                <Row key={cat.id}>
                    <Dropdown
                        placement='rightTop'
                        className='py-2 px-3 rounded-2 dropdown_item'
                        menu={{items:cat.items}}
                    >
                        <Space className='d-flex align-items-center justify-content-between'>
                            <span className='fw-bold'>{cat.title}</span>
                            <div className='d-flex align-items-center'>
                                <CaretDownOutlined/>
                            </div>
                        </Space>
                    </Dropdown>
                </Row>
            )
        }
    })

    const slides = [
        {
            id: 'slide100',
            title: 'First slide',
            image: slide,
            content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            link: ''
        },
        {
            id: 'slide101',
            title: 'Second slide',
            image: slide1,
            content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            link: ''
        },
        {
            id: 'slide102',
            title: 'Third slide',
            image: slide2,
            content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            link: ''
        }
    ]


    return (
        <Container fluid>
            {/*Header*/}
            <Header/>
            {/*Slider*/}
            <Row className='mt-2'>
                <Col sm={1}></Col>
                {/*Menu*/}
                <Col sm={2} className='my-2 rounded-3' style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                    {categoriesMenu}
                </Col>
                {/*Slider*/}
                <Col sm={8} className='py-2 ps-5'>
                    <Slide items={slides}/>
                </Col>
                <Col sm={1}></Col>
            </Row>
            {/*Short description*/}
            <Row className='mt-3'>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Stack direction='horizontal' gap={2}>
                        <Col style={{borderRadius: 10,borderWidth: 3,borderColor: 'rgba(0,0,0,0.1)',borderStyle: 'solid'}}>
                            <Row className='d-flex align-items-center p-3'>
                                <Col sm={4} className='d-flex justify-content-center'>
                                    <CarOutlined style={{fontSize: 48}} className='text-warning'/>
                                </Col>
                                <Col sm={8}>
                                    <p className='fw-bold p-0 m-0'>Free shipping</p>
                                    <p className='p-0 m-0'>For order from 10$</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{borderRadius: 10,borderWidth: 3,borderColor: 'rgba(0,0,0,0.1)',borderStyle: 'solid'}}>
                            <Row className='d-flex align-items-center p-3'>
                                <Col sm={4} className='d-flex justify-content-center'>
                                    <PhoneOutlined style={{fontSize: 48}} className='text-warning'/>
                                </Col>
                                <Col sm={8}>
                                    <p className='fw-bold p-0 m-0'>Support 24/7</p>
                                    <p className='p-0 m-0'>Call us anytime</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{borderRadius: 10,borderWidth: 3,borderColor: 'rgba(0,0,0,0.1)',borderStyle: 'solid'}}>
                            <Row className='d-flex align-items-center p-3'>
                                <Col sm={4} className='d-flex justify-content-center'>
                                    <SafetyCertificateOutlined style={{fontSize: 48}} className='text-warning'/>
                                </Col>
                                <Col sm={8}>
                                    <p className='fw-bold p-0 m-0'>100% Safety</p>
                                    <p className='p-0 m-0'>Secure payments</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{borderRadius: 10,borderWidth: 3,borderColor: 'rgba(0,0,0,0.1)',borderStyle: 'solid'}}>
                            <Row className='d-flex align-items-center p-3'>
                                <Col sm={4} className='d-flex justify-content-center'>
                                    <TagsOutlined style={{fontSize: 48}} className='text-warning'/>
                                </Col>
                                <Col sm={8}>
                                    <p className='fw-bold p-0 m-0'>Hot offer</p>
                                    <p className='p-0 m-0'>Discount up to 90%</p>
                                </Col>
                            </Row>
                        </Col>
                    </Stack>
                </Col>
                <Col sm={1}></Col>
            </Row>
            {/*Feature product*/}
            {/*Divider*/}
            <Row className='mt-4'>
                <Col sm={8}><Divider orientation='left' className='fw-bold fs-5'>Featured Products</Divider></Col>
                <Col sm={4} className='d-flex align-items-center'>
                    <Stack direction='horizontal' gap={1}>
                        <div className='px-2 text-center next-button active'>All</div>
                        <div className='px-2 text-center next-button'>Power tool</div>
                        <div className='px-2 text-center next-button'>Hand tool</div>
                        <div className='px-2 text-center next-button me-3'>Plumbing</div>
                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                            <CaretLeftFilled style={{fontSize: 20}}/></div>}/>
                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                            <CaretRightFilled style={{fontSize: 20}}/></div>}/>
                    </Stack>
                </Col>
            </Row>
            {/*Products*/}
            <Row className='px-5'>
                <Stack direction='horizontal' gap={3}>
                    <ProductItem item={products[0]}/>
                    <ProductItem item={products[1]}/>
                    <ProductItem item={products[2]}/>
                    <ProductItem item={products[3]}/>
                </Stack>
            </Row>
            {/*Best seller*/}
            {/*Divider*/}
            <Row className='mt-4'>
                <Divider orientation='left'><span className='fw-bold fs-5'>Best Seller</span></Divider>
            </Row>
            {/*Products*/}
            <Row className='px-5'>
                {/*Big product*/}
                <Col sm={4} style={{position:'relative'}} className='highlight-product'>
                    <CompressOutlined className='zoom-button' style={{position: "absolute",top:0,right:0,fontSize:24,padding:10}}/>
                    <img src={products[0].image} alt='' className='object-fit-cover w-100'/>
                    <Row className='ps-5 mt-5'>
                        <h5 className='fw-bold'>{products[0].name}</h5>
                        <Stack direction="horizontal" gap={1}>
                            <StarOutlined style={{color: '#ffc107'}}/>
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <span style={{opacity: 0.9}}>{products[0].reviews} reviews</span>
                        </Stack>
                        <p className='fw-bold mt-1'>{products[0].price}$</p>
                    </Row>
                </Col>
                {/*Small product*/}
                <Col sm={8}>
                    <Row>
                        <Stack direction='horizontal' gap={3} className='pb-2'>
                            <ProductItem item={products[1]}/>
                            <ProductItem item={products[2]}/>
                            <ProductItem item={products[3]}/>
                        </Stack>
                    </Row>
                    <Row>
                        <Stack direction='horizontal' gap={3} className='pt-2'>
                            <ProductItem item={products[4]}/>
                            <ProductItem item={products[5]}/>
                            <ProductItem item={products[6]}/>
                        </Stack>
                    </Row>
                </Col>
            </Row>
            {/*Category*/}
            {/*Divider*/}
            <Row className='mt-3'>
                <Divider orientation='left'><span className='fw-bold fs-5'>Popular Categories</span></Divider>
            </Row>
            {/*Category*/}
            <Row style={{backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Col className='mx-5 py-3'>
                    <Stack className='h-100' gap={3}>
                        <Stack direction="horizontal" gap={3} className='h-50'>
                            <Col className='d-flex bg-white'>
                                <img src={category} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                            <Col className='d-flex bg-white'>
                                <img src={category1} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                            <Col className='d-flex bg-white'>
                                <img src={category2} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className='h-50'>
                            <Col className='d-flex bg-white'>
                                <img src={category3} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                            <Col className='d-flex bg-white'>
                                <img src={category4} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                            <Col className='d-flex bg-white'>
                                <img src={category5} alt='' className='object-fit-cover w-50 p-4'/>
                                <div className='ps-5 pt-3 d-flex flex-column'>
                                    <span className='fw-bold'>Power tool</span>
                                    <span>Screw driver</span>
                                    <span>Milling cutter</span>
                                    <span>Wrench</span>
                                    <span>Drill</span>
                                    <span className='text-success mt-2'>Show all</span>
                                </div>
                            </Col>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
            {/*New arrivals*/}
            {/*Divider*/}
            <Row className='mt-3'>
                <Col sm={8}><Divider orientation='left' className='fw-bold fs-5'>New Arrivals</Divider></Col>
                <Col sm={4} className='d-flex align-items-center'>
                    <Stack direction='horizontal' gap={1}>
                        <div className='px-2 text-center next-button active'>All</div>
                        <div className='px-2 text-center next-button'>Power tool</div>
                        <div className='px-2 text-center next-button'>Hand tool</div>
                        <div className='px-2 text-center next-button me-3'>Plumbing</div>
                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                            <CaretLeftFilled style={{fontSize: 20}}/></div>}/>
                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                            <CaretRightFilled style={{fontSize: 20}}/></div>}/>
                    </Stack>
                </Col>
            </Row>
            {/*Products*/}
            <Row className='px-5'>
                <Stack gap={3}>
                    <Stack direction="horizontal" gap={3}>
                        <ProductItem type='flat' item={products[0]}/>
                        <ProductItem type='flat' item={products[1]}/>
                        <ProductItem type='flat' item={products[2]}/>
                    </Stack>
                </Stack>
                <Stack gap={3} className='mt-3'>
                    <Stack direction="horizontal" gap={3}>
                        <ProductItem type='flat' item={products[3]}/>
                        <ProductItem type='flat' item={products[4]}/>
                        <ProductItem type='flat' item={products[5]}/>
                    </Stack>
                </Stack>
            </Row>
            {/*Latest news*/}
            <News/>
            {/*Special product*/}
            <Row className='px-5'>
                <Stack className='mt-4' direction='horizontal' gap={5}>
                    <Col>
                        <Row><Divider orientation='left' className='fw-bold fs-5'>Top Rated Products</Divider></Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[0]}/>
                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[1]}/>

                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[2]}/>

                        </Row>
                    </Col>
                    <Col>
                        <Row><Divider orientation='left' className='fw-bold fs-5'>Special Offers</Divider></Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[3]}/>

                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[4]}/>

                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[5]}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row><Divider orientation='left' className='fw-bold fs-5'>Best Sellers</Divider></Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[6]}/>

                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[7]}/>

                        </Row>
                        <Row className='p-1'>
                            <ProductItem type='flat' item={products[8]}/>
                        </Row>
                    </Col>
                </Stack>
            </Row>
            {/*Footer*/}
            <Footer/>
        </Container>
    );
}

export default Home;