import React, {useContext} from 'react';
import {Col, Row, Stack} from "react-bootstrap";
import {CompressOutlined, HeartOutlined, PieChartTwoTone, StarOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {AppContext} from "../context/AppProvider";
import {products} from "../assets/constant";
import {useNavigate} from "react-router-dom";


const ProductItem = ({type,item}) => {

    const {setProductModal,setCurrentProduct} = useContext(AppContext);
    const navigate = useNavigate();
    function handleOpenModal(id){
        const selectedProduct = products.find(product => product.id === id);
        setCurrentProduct(selectedProduct);
        setProductModal(true)
    }
    function handleToProductDetail(id){
        navigate(`/products/${id}`)
    }

    if (type === 'flat')
        return (
            <Col className='highlight-product' style={{position: 'relative'}}>
                <CompressOutlined
                    className='zoom-button'
                    style={{position: "absolute",top:0,right:0,fontSize:18,padding:10}}
                    onClick={() => handleOpenModal(item.id)}
                />
                <Row onClick={() => handleToProductDetail(item.id)}>
                    <Col sm={5}>
                        <img src={item.image} alt='' className='object-fit-cover w-100'/>
                    </Col>
                    <Col sm={7} className='d-flex flex-column'>
                        <h5 className='fw-bold mt-3 pe-4'>{item.name}</h5>
                        <Stack direction="horizontal" gap={1}>
                            <StarOutlined style={{color: '#ffc107'}}/>
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <span style={{opacity: 0.9}}>{item.reviews} reviews</span>
                        </Stack>
                        <p className='fw-bold mt-1'>{item.price}$</p>
                    </Col>
                </Row>
            </Col>
        );
    else if (type === 'small')
        return (
            <Row onClick={() => handleToProductDetail(item.id)}>
                <Col sm={5}>
                    <img src={item.image} alt='' className='object-fit-cover w-100'/>
                </Col>
                <Col sm={7} className='d-flex flex-column'>
                    <p className='mt-2' style={{fontSize: 14}}>{item.name}</p>
                    <Stack direction="horizontal" gap={1}>
                        <StarOutlined style={{color: '#ffc107',fontSize: 12}}/>
                        <StarOutlined style={{color: '#ffc107',fontSize: 12}}/>
                        <StarOutlined style={{color: '#ffc107',fontSize: 12}}/>
                        <StarOutlined style={{color: '#ffc107',fontSize: 12}}/>
                        <StarOutlined style={{color: '#ffc107',fontSize: 12}}/>
                    </Stack>
                    <p className='mt-1'>{item.price}$</p>
                </Col>
            </Row>
        )
    else if (type === 'detail')
        return (
            <Col style={{position:'relative'}} className='highlight-product'>
                <CompressOutlined
                    className='zoom-button'
                    style={{position: "absolute",top:0,right:0,fontSize:24,padding:10}}
                    onClick={() => handleOpenModal(item.id)}
                />
                <Row className='p-2' onClick={() => handleToProductDetail(item.id)}>
                    <img src={item.image} alt='' className='object-fit-cover w-75'/>
                </Row>
                <Row className='ps-4' onClick={() => handleToProductDetail(item.id)}>
                    <h5 className='fw-bold'>{item.name}</h5>
                    <Stack direction="horizontal" gap={1}>
                        <StarOutlined style={{color: '#ffc107'}}/>
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <span style={{opacity: 0.9}}>{item.reviews} reviews</span>
                    </Stack>
                    <p className='fw-bold mt-1'>{item.price}$</p>
                    <ul className='ps-4 opacity-75'>
                        <li>Speed: {item.speed}Rpm</li>
                        <li>Power Source: {item.powerSource}</li>
                        <li>Battery Cell Type: {item.batteryType}</li>
                        <li>Voltage: {item.voltage}V</li>
                        <li>Battery Capacity: {item.capacity}Ah</li>
                    </ul>
                </Row>
            </Col>
        )
    else if (type === 'detailFlat')
        return (
            <Row style={{position:'relative'}} className='highlight-product' onClick={() => handleToProductDetail(item.id)}>
                <Col sm={3} className='p-2'>
                    <img src={item.image} alt='' className='object-fit-cover w-100'/>
                </Col>
                <Col sm={6} className='ps-4 mt-3'>
                    <h5 className='fw-bold'>{item.name}</h5>
                    <Stack direction="horizontal" gap={1}>
                        <StarOutlined style={{color: '#ffc107'}}/>
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <span style={{opacity: 0.9, marginLeft: 10}}>{item.reviews} reviews</span>
                    </Stack>
                    <ul className='ps-4 opacity-75 mt-3'>
                        <li>Speed: {item.speed} rpm</li>
                        <li>Power Source: {item.powerSource}</li>
                        <li>Battery Cell Type: {item.batteryType}</li>
                        <li>Voltage: {item.voltage}V</li>
                        <li>Battery Capacity: {item.capacity}Ah</li>
                    </ul>
                </Col>
                <Col sm={3} className='position-relative'>
                    <CompressOutlined
                        className='zoom-button'
                        style={{position: "absolute",top:0,right:0,fontSize:24,padding:10}}
                        onClick={() => handleOpenModal(item.id)}
                    />
                    <p className='mt-4'><span className='fw-bold'>Available: </span><span className='text-success'>In stock</span></p>
                    <p className='fw-bold'>{item.price}$</p>
                    <Button type='ghost' className='bg-warning' size='large'>Add to cart</Button>
                    <Stack className='mt-4' gap={3} direction='horizontal'>
                        <HeartOutlined style={{fontSize: 24}}/>
                        <PieChartTwoTone style={{fontSize: 24}}/>
                    </Stack>
                </Col>
            </Row>
        )
    else
        return (
            <Col style={{position:'relative'}} className='highlight-product'>
                <CompressOutlined
                    className='zoom-button'
                    style={{position: "absolute",top:0,right:0,fontSize:24,padding:10}}
                    onClick={() => handleOpenModal(item.id)}
                />
                <Row className='p-2' onClick={() => handleToProductDetail(item.id)}>
                    <img src={item.image} alt='' className='object-fit-cover w-75'/>
                </Row>
                <Row className='ps-4' onClick={() => handleToProductDetail(item.id)}>
                    <h5 className='fw-bold'>{item.name}</h5>
                    <Stack direction="horizontal" gap={1}>
                        <StarOutlined style={{color: '#ffc107'}}/>
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <span style={{opacity: 0.9}}>{item.reviews} reviews</span>
                    </Stack>
                    <p className='fw-bold mt-1'>{item.price}$</p>
                </Row>
            </Col>
        );
};

export default ProductItem;