import React, {useEffect, useState} from 'react';
import MenuBar from "../../../components/MenuBar";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const DashboardPage = () => {

    const [hello,setHello] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function hello(){
            try {
                const res = await axios.get('http://nupakachi.online/api/v1/admin',{
                    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json'}
                })
                setHello(res.data)
            }catch (e){
                localStorage.removeItem('token')
                navigate('/login')
            }
        }
        hello().then()
    },[navigate])

    return (
        <div className='container-fluid'>
            <div className='row' style={{height: '100vh'}}>
                <MenuBar/>
                <div className='col-10' style={{background: '#ccc', opacity: 0.1}}>
                    Dashboard page
                    <p>{hello}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage