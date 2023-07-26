import React, {useContext} from 'react';
import {Button, Divider, Modal} from "antd";
import {AppContext} from "../../context/AppProvider";
import {Col, Row, Stack} from "react-bootstrap";
import {BarChartOutlined, HeartOutlined, StarOutlined} from "@ant-design/icons";
import TypedInputNumber from "antd/es/input-number";

const Index = () => {

    const {productModal,setProductModal,currentProduct,setCurrentProduct} = useContext(AppContext);

    function handleOk(){
        setProductModal(false)
        setCurrentProduct(null)
    }
    function handleClose(){
        setProductModal(false)
        setCurrentProduct(null)
    }

    return (
        <Modal open={productModal} onCancel={handleClose} onOk={handleOk} style={{minWidth: '75%'}} centered cancelButtonProps={{className: 'd-none'}}>
            {
                currentProduct && <Row className='px-5 mt-3'>
                    <Col>
                        <Row>
                            <Col className='p-2 rounded-4' style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                <img src={currentProduct.image} alt="" className='w-100 object-fit-cover'/>
                            </Col>
                        </Row>
                        {/*Pictures Slider*/}
                        <Row className='mt-3 gap-3'>
                            <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                <img src={currentProduct.image} alt="" className='w-100 object-fit-cover'/>
                            </Col>
                            <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                <img src={currentProduct.image} alt="" className='w-100 object-fit-cover'/>
                            </Col>
                            <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                <img src={currentProduct.image} alt="" className='w-100 object-fit-cover'/>
                            </Col>
                            <Col style={{border: '2px solid rgba(0,0,0,0.08)',padding: 2}}>
                                <img src={currentProduct.image} alt="" className='w-100 object-fit-cover'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='px-3 mt-3'>
                            <h3> {currentProduct.name}</h3>
                            <Stack direction='horizontal' gap={1} className='mt-3'>
                                <StarOutlined style={{color: '#ffc107'}}/>
                                <StarOutlined style={{color: '#ffc107'}}/>
                                <StarOutlined style={{color: '#ffc107'}}/>
                                <StarOutlined style={{color: '#ffc107'}}/>
                                <StarOutlined/>
                                <span className='ms-2'>{currentProduct.reviews} reviews</span>
                            </Stack>
                            <p className='mt-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.
                            </p>
                            <Divider className='ms-3'/>
                            <Stack direction='horizontal' gap={4}>
                                <span>Available: <span className='text-success'>In Stock</span></span>
                                <span>Brand: <span>Wakita</span></span>
                                <span>Model: <span>SC1009R</span></span>
                            </Stack>
                            <h5 className='fw-bold mt-2'>$ {currentProduct.price}.00</h5>
                            <p className='mt-2 opacity-75'>COLOR</p>
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
                                <Button type='ghost' className='bg-warning d-flex justify-content-center align-items-center'><HeartOutlined/></Button>
                                <Button type='ghost' className='bg-warning d-flex justify-content-center align-items-center'><BarChartOutlined/></Button>
                            </Stack>
                        </Row>
                    </Col>
                </Row>
            }
        </Modal>
    );
};

export default Index;