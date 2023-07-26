import React from 'react';
import {Col, Row} from "react-bootstrap";
import {logo} from "../assets/logo";
import {Button, Dropdown, Input, Select, Space} from "antd";
import {CaretDownOutlined, CaretUpOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {navigators} from "../assets/constant";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    // create navigator
    const navigatorMenu = navigators.map(item => {
        if (item.items == null)
            return (<div className='dropdown_item py-2 px-2 fw-bold rounded-2' style={{fontSize: 14}} key={item.name}>{item.name}</div>)
        else
            return (
                <Dropdown
                    key={item.name}
                    className='py-2 px-3 rounded-2 dropdown_item'
                    menu={{items: item.items}}
                >
                    <Space className='d-flex align-items-center'>
                        <span className='fw-bold' onClick={() => navigate(item.link)}>{item.name}</span>
                        <div className='d-flex align-items-center'>
                            <CaretDownOutlined/>
                        </div>
                    </Space>
                </Dropdown>
            )
    })

    return (
        <>
            {/*Go to top button*/}
            <Button shape='circle' type='ghost' size='large' style={{position: 'fixed',bottom: 30,right: 40,zIndex:10}} className='bg-warning'>
                <div className='d-flex align-items-center justify-content-center'>
                    <CaretUpOutlined style={{fontSize: 24}}/>
                </div>
            </Button>
            {/*Start Header*/}
            <Row style={{backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Col className='text-center'>
                    <a className='p-2 text-decoration-none text-secondary' href="/">About Us</a>
                    <a className='p-2 text-decoration-none text-secondary' href='/'>Contacts</a>
                    <a className='p-2 text-decoration-none text-secondary' href='/'>Location</a>
                    <a className='p-2 text-decoration-none text-secondary' href='/'>Track Order</a>
                    <a className='p-2 text-decoration-none text-secondary' href='/'>Blogs</a>
                </Col>
                <Col className='text-center text-secondary'>
                    <span className='p-2'>My account</span>
                    <span className='p-2'>Language</span>
                    <span className='p-2'>Dark mode</span>
                </Col>
            </Row>
            {/*Search*/}
            <Row className='align-items-center' style={{height: 90}}>
                {/*Logo*/}
                <Col className='d-flex justify-content-center' onClick={() => navigate('/')}>
                    {logo}
                </Col>
                {/*Search box*/}
                <Col className='d-flex'>
                    <Select
                        showSearch
                        size="large"
                        defaultValue='all'
                        options={[
                            {
                                value: 'all',
                                label: 'All categories',
                            },
                            {
                                value: 'instruments',
                                label: 'Instruments',
                            },
                            {
                                value: 'electronics',
                                label: 'Electronics',
                            },
                        ]}
                    />
                    <Input size="large" placeholder="What your find?" className='ms-1'/>
                </Col>
                {/*Contact*/}
                <Col className='d-flex justify-content-center'>
                    <div className='text-end d-flex flex-column'>
                        <span className='opacity-50'>Customer service</span>
                        <span className='fw-bold fs-4'>(800) 060-1618</span>
                    </div>
                </Col>
            </Row>
            {/*Navigation*/}
            <Row className='bg-warning px-5' style={{height: 50}}>
                <Col sm={3}>
                </Col>
                {/*Navigation menu*/}
                <Col sm={6} className='d-flex align-items-center'>
                    {navigatorMenu}
                </Col>
                {/*Cart and user*/}
                <Col sm={3} className='d-flex align-items-center'>
                    <Space className='px-3 py-1 dropdown_item rounded-2'>
                        <HeartOutlined style={{fontSize: 28}}/>
                    </Space>
                    <Space className='px-3 py-1 dropdown_item rounded-2'>
                        <ShoppingCartOutlined style={{fontSize: 28}} />
                    </Space>
                    <Space className='px-3 py-1 dropdown_item rounded-2'>
                        <UserOutlined style={{fontSize: 28}} />
                    </Space>
                </Col>
            </Row>
            {/*End header*/}
        </>
    );
};

export default Header;