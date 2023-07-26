import React from 'react';
import MenuBar from "../../../components/MenuBar";

const RegisterPage = () => {
    return (
        <div className='container-fluid'>
            <div className='row' style={{height: '100vh'}}>
                <MenuBar/>
                <div className='col-10' style={{background: 'rgba(0,0,0,0.05)'}}>
                    <div style={{height: 50}}>

                    </div>
                    <h1>Register page</h1>
                    <input name='firstname' placeholder='First name'/>
                    <input name='lastname' placeholder='Last name'/>
                    <input name='email' placeholder='Email name'/>
                    <input name='password' placeholder='Password name'/>
                    <input name='birthday' placeholder='Birthday'/>
                    <input name='address' placeholder='Address'/>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;