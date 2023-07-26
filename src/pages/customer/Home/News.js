import React, {useState} from 'react';
import {Col, Row, Stack} from "react-bootstrap";
import {Button, Divider} from "antd";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import Post from "../../../components/Post";
import {posts} from "../../../assets/constant";

const News = () => {

    const [post,setPost] = useState(0);
    function handleSlider(type){
        switch (type){
            case 'next':
                setPost(prevState => prevState === posts.length - 2 ? 0 : prevState + 1)
                break
            case 'prev':
                setPost(prevState => prevState === 0 ? posts.length - 2 : prevState - 1)
                break
            default:
                break
        }
    }

    return (
        <>
            {/*Divider*/}
            <Row className='mt-4'>
                <Col sm={11}><Divider orientation='left' className='fw-bold fs-5'>Latest News</Divider></Col>
                <Col sm={1} className='d-flex align-items-center'>
                    <Stack direction='horizontal' gap={1}>
                        <Button
                            icon={
                            <div className='d-flex justify-content-center align-items-center'>
                                <CaretLeftFilled style={{fontSize: 20}}/>
                            </div>}
                            onClick={() => handleSlider("next")}
                        />
                        <Button
                            icon={
                            <div className='d-flex justify-content-center align-items-center'>
                                <CaretRightFilled style={{fontSize: 20}}/>
                            </div>}
                            onClick={() => handleSlider("prev")}
                        />
                    </Stack>
                </Col>
            </Row>
            {/*Latest news*/}
            <Row className='px-5'>
                <Stack direction='horizontal' gap={5}>
                    <Post item={posts[post]}/>
                    <Post item={posts[post + 1]}/>
                </Stack>
            </Row>
        </>
    );
};

export default News;