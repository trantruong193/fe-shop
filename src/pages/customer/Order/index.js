import React, {useState} from 'react';
import MenuBar from "../../../components/MenuBar";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import {Button} from "antd";

var stompClient = null

const OrderPage = () => {

    const [publicChats,setPublicChats] = useState([])
    const [connected,setConnect] = useState(false)

    const [user,setUser] = useState({
        username: '',
        receiver: '',
        message: ''
    })

    function handleJoinChat(){
        let Sock = new SockJS('http://nupakachi.online/ws')
        stompClient = over(Sock);
        stompClient.connect({},onConnect,onError)
    }
    function onConnect(){
        setConnect(true)
        stompClient.subscribe('/chatroom/public',onPublicMessageReceived)
        stompClient.subscribe(`/chatroom/${user.username}/private`,onPrivateMessageReceived)
    }
    function onError(err){
        console.log(err)
    }
    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
        setConnect(false);
        console.log("Disconnected");
    }
    function onPublicMessageReceived(payload){
        const data = JSON.parse(payload.body)
        switch (data.status){
            case 'JOIN':
                break
            case 'MESSAGE':
                publicChats.push(data)
                setPublicChats([...publicChats])
                break
            default:
                break
        }
    }
    function onPrivateMessageReceived(payload){
        const data = JSON.parse(payload.body)
        publicChats.push(data)
        setPublicChats([...publicChats])
    }

    function handleUserName(e){
        const {value} = e.target
        setUser({...user,username: value})
    }
    function handleReceiver(e){
        const {value} = e.target
        setUser({...user,receiver: value})
    }
    function handleMessage(e){
        const {value} = e.target
        setUser({...user,message: value})
    }

    function handleSendPublic(){
        if (stompClient){
            if (user.receiver === '' || user.receiver === null){
                let message = {
                    sender: user.username,
                    message: user.message,
                    status: 'MESSAGE'
                }
                stompClient.send('/app/messages',{},JSON.stringify(message))
                setUser({...user,message: ''})
            }else {
                let message = {
                    sender: user.username,
                    message: user.message,
                    receiver: user.receiver,
                    status: 'MESSAGE'
                }
                stompClient.send('/app/private-messages',{},JSON.stringify(message))
                setUser({...user,message: ''})
            }
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row' style={{height: '100vh'}}>
                <MenuBar/>
                <div className='col-10' style={{background: '#ccc', opacity: 0.2}}>
                    {connected ? <div>
                        <h1>{user.username}</h1>
                        <Button onClick={disconnect}>Disconnect</Button>
                        {publicChats.map((message,index) => <div key={index}>
                            <p><b>From: </b><span>{message.sender}</span></p>
                            <p>{message.message}</p>
                        </div>)}
                        {/*chat input*/}
                        <div>
                            <input onChange={handleMessage} value={user.message} placeholder='Enter your message'/>
                            <input onChange={handleReceiver} value={user.receiver} placeholder={'Enter receiver'}/>
                            <button onClick={handleSendPublic}>Send</button>
                        </div>
                    </div> : <div>
                        <input value={user.username}
                               onChange={handleUserName}
                               placeholder='Enter your name'
                        />
                        <button onClick={handleJoinChat}>Join chat</button>
                    </div>}

                </div>
            </div>
        </div>
    );
};

export default OrderPage;