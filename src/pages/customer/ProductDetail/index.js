import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {Breadcrumb, Button, Divider, Modal, Tabs} from "antd";
import {products} from "../../../assets/constant";
import {
    BarChartOutlined, CaretLeftFilled, CaretRightFilled,
    HeartOutlined, LeftOutlined, RightOutlined, StarOutlined,
    ZoomInOutlined
} from "@ant-design/icons";
import './index.css';
import TypedInputNumber from "antd/es/input-number";
import {useParams} from "react-router-dom";
import ProductItem from "../../../components/ProductItem";

const Index = () => {

    const {id} = useParams();

    const [viewImage,setViewImage] = useState(false)

    const [selectedProduct,setSelectedProduct] = useState(null);

    useEffect(() => {
        const found = products.find(product => product.id === id)
        setSelectedProduct(found)
    },[id])

    const items = [
        {
            key: '1',
            label: (<span className='fw-bold'>Description</span>),
            children: (<div>Descriptions</div>),
        },
        {
            key: '2',
            label: (<span className='fw-bold'>Specification</span>),
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: (<span className='fw-bold'>Reviews</span>),
            children: `Content of Tab Pane 3`,
        },
    ];

    function handleOk(){
        setViewImage(false)
    }
    function handleViewImages(){
        setViewImage(true)
    }

    return (

        <Container fluid>
            { selectedProduct &&
                <Modal open={viewImage}
                       style={{minWidth: '90%'}} centered closable={false}
                       cancelButtonProps={{className: 'd-none'}}
                       onOk={handleOk}
                >
                    <Row className='bg-dark'>
                        <Col sm={3} className='d-flex align-items-center'>
                            <LeftOutlined style={{fontSize: 36,color: 'white'}}/>
                        </Col>
                        <Col sm={6} className='py-5'>
                            <img src={selectedProduct.image} alt='' className='w-100 object-fit-contain'/>
                        </Col>
                        <Col sm={3} className='d-flex align-items-center justify-content-end'>
                            <RightOutlined style={{fontSize: 36,color: 'white'}}/>
                        </Col>
                    </Row>
                </Modal>
            }

            <Header/>
                <Row className='px-5'>
                    { selectedProduct &&
                        <Col>
                            {/*Breadcrumb*/}
                            <Row className='mt-3'>
                                <Breadcrumb
                                    items={[
                                        {
                                            title: <a href="/" className='text-decoration-none'>Home</a>
                                        },
                                        {
                                            title: <a href="/" className='text-decoration-none'>Products</a>
                                        },
                                        {
                                            title: 'Product name'
                                        },
                                    ]}
                                />
                            </Row>
                            <Row className='mt-5'>
                                <Col sm={1}></Col>
                                <Col sm={4} className='px-5'>
                                    {/*Main picture*/}
                                    <Row>
                                        <Col className='position-relative p-2' style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                            <div className='view-image-button'>
                                                <ZoomInOutlined style={{fontSize: 24,opacity: 0.6}}
                                                                onClick={handleViewImages}
                                                />
                                            </div>
                                            <img src={selectedProduct.image} alt="" className='w-100 object-fit-cover'/>
                                        </Col>
                                    </Row>
                                    {/*Pictures Slider*/}
                                    <Row className='mt-3 gap-3'>
                                        <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                            <img src={selectedProduct.image} alt="" className='w-100 object-fit-cover'/>
                                        </Col>
                                        <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                            <img src={selectedProduct.image} alt="" className='w-100 object-fit-cover'/>
                                        </Col>
                                        <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                            <img src={selectedProduct.image} alt="" className='w-100 object-fit-cover'/>
                                        </Col>
                                        <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                            <img src={selectedProduct.image} alt="" className='w-100 object-fit-cover'/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={4} className='px-3'>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col sm={10}>
                                                    <h3 className='pe-5'>Brandix Screwdriver SCREW1500ACC</h3>
                                                </Col>
                                                <Col sm={2} className='d-flex flex-column'>
                                                    <div className='d-flex justify-content-center align-items-center' style={{cursor: "pointer"}}>
                                                        <HeartOutlined style={{fontSize: 24,opacity:0.8}}/>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center mt-2' style={{cursor: "pointer"}}>
                                                        <BarChartOutlined style={{fontSize: 24,opacity:0.8}}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='mt-1'>
                                        <Stack direction='horizontal' gap={1}>
                                            <StarOutlined style={{color: '#ffc107'}}/>
                                            <StarOutlined />
                                            <StarOutlined />
                                            <StarOutlined />
                                            <StarOutlined />
                                            <span className='opacity-75 ms-2'>7 reviews</span>
                                        </Stack>
                                    </Row>
                                    <Row className='mt-4'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.
                                        </p>
                                    </Row>
                                    <Row className='mt-1'>
                                        <ul className='ps-4'>
                                            <li>Speed: {selectedProduct.speed} rpm</li>
                                            <li>Power Source: {selectedProduct.powerSource}</li>
                                            <li>Battery Cell Type: {selectedProduct.batteryType}</li>
                                            <li>Voltage: {selectedProduct.voltage}V</li>
                                            <li>Battery Capacity: {selectedProduct.capacity}Ah</li>
                                        </ul>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span className='opacity-75'>Brand: Wakita</span>
                                            <span className='ms-5 opacity-75'>Model: S100DC</span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} className='px-5' style={{borderLeft: '2px solid rgba(0,0,0,0.08)'}}>
                                    <p>Available: <span className='text-success'>In stock</span></p>
                                    <h5 className='fw-bold'>$ {selectedProduct.price}.00</h5>
                                    <p className='mt-3 opacity-75'>COLOR</p>
                                    <Stack gap={3} direction='horizontal'>
                                        <div style={{width: 30,height:30,borderRadius:'50%'}} className='bg-danger select-color-button'>
                                        </div>
                                        <div style={{width: 30,height:30,borderRadius:'50%'}} className='bg-warning select-color-button'>
                                        </div>
                                        <div style={{width: 30,height:30,borderRadius:'50%'}} className='bg-dark select-color-button'>
                                        </div>
                                        <div style={{width: 30,height:30,borderRadius:'50%'}} className='bg-success select-color-button'>
                                        </div>
                                        <div style={{width: 30,height:30,borderRadius:'50%',border: '1px solid #ccc'}} className='bg-white select-color-button'>
                                        </div>
                                    </Stack>
                                    <p className='mt-3 opacity-75'>MATERIAL</p>
                                    <Stack direction='horizontal' gap={2}>
                                        <div className='p-2 rounded-2' style={{border: '1px solid #ccc',fontSize: 13}}>Steel</div>
                                        <div className='p-2 rounded-2' style={{border: '1px solid #ccc',fontSize: 13}}>Wood</div>
                                        <div className='p-2 rounded-2' style={{border: '1px solid #ccc',fontSize: 13}}>Composite</div>
                                    </Stack>
                                    <p className='mt-3 opacity-75'>QUANTITY</p>
                                    <Stack direction='horizontal' gap={3}>
                                        <TypedInputNumber defaultValue={1}/>
                                        <Button type='ghost' className='bg-warning'>Add To Cart</Button>
                                    </Stack>
                                </Col>
                            </Row>
                            <Row className='mt-5 px-5'>
                                <Tabs defaultActiveKey="1" items={items}/>
                            </Row>
                            {/*Divider*/}
                            <Row className='mt-4'>
                                <Col sm={11}><Divider orientation='left' className='fw-bold fs-5'>Related products</Divider></Col>
                                <Col sm={1} className='d-flex align-items-center'>
                                    <Stack direction='horizontal' gap={1}>
                                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                                            <CaretLeftFilled style={{fontSize: 20}}/></div>}/>
                                        <Button icon={<div className='d-flex justify-content-center align-items-center'>
                                            <CaretRightFilled style={{fontSize: 20}}/></div>}/>
                                    </Stack>
                                </Col>
                            </Row>
                            {/*Related products*/}
                            <Row>
                                <Stack direction='horizontal' gap={3}>
                                    <ProductItem item={products[0]}/>
                                    <ProductItem item={products[1]}/>
                                    <ProductItem item={products[2]}/>
                                    <ProductItem item={products[3]}/>
                                    <ProductItem item={products[4]}/>
                                </Stack>
                            </Row>
                        </Col>
                    }
                </Row>
            <Footer/>
        </Container>
    );
};

export default Index;