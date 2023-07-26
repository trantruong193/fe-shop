import React, {useState} from 'react';
import MenuBar from "../../../components/MenuBar";
import {Button, Input} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    async function handleLogin(){
        try{
            const res = await axios.post('http://nupakachi.online/api/v1/auth/login',{email,password})
            localStorage.setItem('token',res.data.data.token)
            navigate('/')
        }catch (e){
            setError(e.response.data.errorMessage.err_vn)
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row' style={{height: '100vh'}}>
                <MenuBar/>
                <div className='col-7' style={{background: '#cccccc'}}>
                    {error !== '' && <p className='text-danger'>{error}</p>}
                    <form>
                        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
                        <Input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password'/>
                        <Button onClick={handleLogin}>Login</Button>
                    </form>
                </div>
                <div className='col-3'>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;