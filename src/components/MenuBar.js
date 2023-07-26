import React from 'react';
import {NavLink} from "react-router-dom";
import {AppstoreAddOutlined, DotChartOutlined, HomeOutlined, LoginOutlined} from "@ant-design/icons";

const MenuBar = () => {
    return (
        <div className='col-2'>
            <div className='d-flex justify-content-center align-items-center p-2 border-bottom border-dark'>
                <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                     alt='' style={{width: 50,height: 50}}/>
                <h4 className='ps-3'>Ant design</h4>
            </div>
            <div>
                <div className='mt-2 ps-2 d-flex flex-column'>
                    <NavLink to={'/'}
                             className={({ isActive, isPending }) =>
                                 isActive ? 'text-success text-decoration-none' : 'text-decoration-none text-black'
                             }
                    >
                        <div className='d-flex align-items-center py-1'>
                            <HomeOutlined style={{fontSize: 30}}/>
                            <span className='ps-2 fs-4'>Order</span>
                        </div>
                    </NavLink>
                    <NavLink to={'/register'}
                             className={({ isActive, isPending }) =>
                                 isActive ? 'text-success text-decoration-none' : 'text-decoration-none text-black'
                             }
                    >
                        <div className='d-flex align-items-center py-1'>
                            <AppstoreAddOutlined style={{fontSize: 30}}/>
                            <span className='ps-2 fs-4'>Register</span>
                        </div>
                    </NavLink>
                    <NavLink to={'/login'}
                             className={({ isActive, isPending }) =>
                                 isActive ? 'text-success text-decoration-none' : 'text-decoration-none text-black'
                             }
                    >
                        <div className='d-flex align-items-center py-1'>
                            <LoginOutlined style={{fontSize: 30}}/>
                            <span className='ps-2 fs-4'>Login</span>
                        </div>
                    </NavLink>
                    <NavLink to={'/dashboard'}
                             className={({ isActive, isPending }) =>
                                 isActive ? 'text-success text-decoration-none' : 'text-decoration-none text-black'
                             }
                    >
                        <div className='d-flex align-items-center py-1'>
                            <DotChartOutlined style={{fontSize: 30}}/>
                            <span className='ps-2 fs-4'>Dashboard</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;