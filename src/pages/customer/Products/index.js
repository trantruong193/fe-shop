import React, {useState} from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {Breadcrumb, Button, Checkbox, Collapse, InputNumber, Select, Slider} from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import {categories, products} from "../../../assets/constant";
import {
    AppstoreAddOutlined,
    AppstoreOutlined,
    BarsOutlined,
    CheckOutlined,
    StepBackwardOutlined, StepForwardOutlined
} from "@ant-design/icons";
import ProductItem from "../../../components/ProductItem";

const Index = () => {

    const [mode,setMode] = useState(null);

    const marks = {
        0: {
            label: <span className='fw-bold py-2'>0$</span>
        },
        2000: {
            label: <span className='fw-bold py-2'>2000$</span>
        }
    }

    const productList = mode === "detailFlat" ? (
        products.map(product => (
            <div key={product.id} className='mt-3'>
                <ProductItem item={product} type={mode}/>
            </div>
        ))
    ) : (
        products.map(product => (
            <Col key={product.id} sm={4} className='mt-3'>
                <ProductItem item={product} type={mode}/>
            </Col>
        ))
    )


    return (
        <Container fluid>
            <Header/>
            <Row className='px-5'>
                <Col>
                    {/*Breadcrumb*/}
                    <Row className='mt-3'>
                        <Breadcrumb
                            items={[
                                {
                                    title: <a href="/" className='text-decoration-none'>Home</a>
                                },
                                {
                                    title: 'Products',
                                },
                            ]}
                        />
                    </Row>
                    {/*All products*/}
                    <Row className='mt-3'>
                        {/*Filter menu*/}
                        <Col sm={3}>
                            <Collapse defaultActiveKey={[1,2,3,4]}>
                                <CollapsePanel key={1} header={(<span className='fw-bold'>Category</span>)}>
                                    {categories.map(category => (
                                        <div key={category.id} className='py-1'>
                                            <Checkbox/>
                                            <span className='ps-2'>{category.title}</span>
                                        </div>
                                    ))}
                                </CollapsePanel>
                                <CollapsePanel key={2} header={(<span className='fw-bold'>Brand</span>)}>
                                    <div className='p-1'>
                                        <Checkbox/>
                                        <span className='ps-2'>Apple</span>
                                    </div>
                                    <div className='p-1'>
                                        <Checkbox/>
                                        <span className='ps-2'>Samsung</span>
                                    </div>
                                    <div className='p-1'>
                                        <Checkbox/>
                                        <span className='ps-2'>Nokia</span>
                                    </div>
                                    <div className='p-1'>
                                        <Checkbox/>
                                        <span className='ps-2'>Xiaomi</span>
                                    </div>
                                    <div className='p-1'>
                                        <Checkbox/>
                                        <span className='ps-2'>Google</span>
                                    </div>
                                </CollapsePanel>
                                <CollapsePanel key={3} header={(<span className='fw-bold'>Price</span>)}>
                                    <div className='px-3'>
                                        <Slider range={true} marks={marks} defaultValue={[0,2000]} min={0} max={2000} onChange={value => {}}/>
                                        <div className='px-2 d-flex justify-content-between align-items-center'>
                                            <span className='fw-bold'>Price: </span>
                                            <InputNumber min={0} max={1999} defaultValue={0}/>
                                            <InputNumber min={1} max={2000} defaultValue={2000}/>
                                        </div>
                                    </div>
                                </CollapsePanel>
                                <CollapsePanel key={4} header={(<span className='fw-bold'>Color</span>)}>
                                    <div className='px-3'>
                                        <Stack gap={2} direction='horizontal'>
                                            <div className='bg-secondary d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-white' style={{fontSize: 18}}/>
                                            </div>
                                            <div className='bg-black d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-white' style={{fontSize: 18}}/>
                                            </div>
                                            <div className='bg-white d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-black' style={{fontSize: 18}}/>
                                            </div>
                                            <div className='bg-info d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-white' style={{fontSize: 18}}/>
                                            </div>
                                            <div className='bg-primary d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-white' style={{fontSize: 18}}/>
                                            </div>
                                            <div className='bg-warning d-flex justify-content-center align-items-center rounded-2' style={{width: 30, height: 30, border: '1px solid #ccc'}}>
                                                <CheckOutlined className='text-white' style={{fontSize: 18}}/>
                                            </div>
                                        </Stack>
                                    </div>
                                </CollapsePanel>
                            </Collapse>
                            <Row className='mt-3'>
                                <Col className='d-flex justify-content-center'>
                                    <Stack gap={5} direction='horizontal'>
                                        <Button type='ghost' className='bg-warning'>Filter</Button>
                                        <Button type='ghost' className='bg-danger'>Reset</Button>
                                    </Stack>
                                </Col>
                            </Row>
                            {/*Latest products*/}
                            <Row className='mt-5 px-3'>
                                <Col style={{border: '1px solid #ccc'}} className='rounded-2'>
                                    <h5 className='my-3'>Latest Products</h5>
                                    <ProductItem type='small' item={products[0]}/>
                                    <ProductItem type='small' item={products[1]}/>
                                    <ProductItem type='small' item={products[2]}/>
                                    <ProductItem type='small' item={products[3]}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={9}>
                            <Row>
                                {/*Display type*/}
                                <Col>
                                    <Stack direction='horizontal' gap={2}>
                                        <div style={{height: 40,width: 40, border: '1px solid #ccc'}} className={`d-flex justify-content-center align-items-center rounded-2 ${mode===null?'bg-warning':null}`}>
                                            <AppstoreOutlined style={{fontSize: 20}} onClick={() => setMode(null)}/>
                                        </div>
                                        <div style={{height: 40,width: 40, border: '1px solid #ccc'}} className={`d-flex justify-content-center align-items-center rounded-2 ${mode==='detail'?'bg-warning':null}`}>
                                            <AppstoreAddOutlined style={{fontSize: 20}} onClick={() => setMode("detail")}/>
                                        </div>
                                        <div style={{height: 40,width: 40, border: '1px solid #ccc'}} className={`d-flex justify-content-center align-items-center rounded-2 ${mode==='detailFlat'?'bg-warning':null}`}>
                                            <BarsOutlined style={{fontSize: 20}}  onClick={() => setMode("detailFlat")}/>
                                        </div>
                                    </Stack>
                                </Col>
                                {/*Sort*/}
                                <Col className='d-flex justify-content-end align-items-center'>
                                    <span className='me-2'>Sort</span>
                                    <Select
                                        defaultValue='default'
                                        options={[
                                            {
                                                value: 'default',
                                                label: 'Default',
                                            },
                                            {
                                                value: 'price',
                                                label: 'Price',
                                            },
                                            {
                                                value: 'name',
                                                label: 'Name',
                                            },
                                            {
                                                value: 'brand',
                                                label: 'Brand'
                                            }
                                        ]}
                                    />
                                    <span className='me-2 ms-3'>Show</span>
                                    <Select
                                        defaultValue='12'
                                        options={[
                                            {
                                                value: '12',
                                                label: '12',
                                            },
                                            {
                                                value: '24',
                                                label: '24',
                                            }
                                        ]}
                                    />
                                </Col>
                            </Row>
                            {/*All products*/}
                            <Row className='px-3'>
                                {productList}
                            </Row>
                            {/*Page navigator*/}
                            <Row className='mt-5'>
                                <Col className='d-flex justify-content-center'>
                                    <div style={{width: 30, height: 30}} className='bg-warning d-flex align-items-center justify-content-center rounded-1 me-1'>
                                        <StepBackwardOutlined />
                                    </div>
                                    <div style={{width: 25, height: 30}} className='bg-warning d-flex align-items-center justify-content-center rounded-1 mx-1'>
                                        1
                                    </div>
                                    <div style={{width: 25, height: 30}} className='bg-warning d-flex align-items-center justify-content-center rounded-1 mx-1'>
                                        2
                                    </div>
                                    <div style={{width: 25, height: 30}} className='bg-warning d-flex align-items-center justify-content-center rounded-1 mx-1'>
                                        3
                                    </div>
                                    <div style={{width: 30, height: 30}} className='bg-warning d-flex align-items-center justify-content-center rounded-1 ms-1'>
                                        <StepForwardOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default Index;