import React from 'react';
import {Col, Row} from "react-bootstrap";

const Post = ({item}) => {
    return (
        <Col>
            <Row>
                <Col>
                    <img src={item.image} alt='' className='object-fit-cover w-100'/>
                </Col>
                <Col>
                    <p>{item.title}</p>
                    <i className='opacity-50 mb-2'>{item.date}</i>
                    <p>{item.content}...</p>
                </Col>
            </Row>
        </Col>
    );
};

export default Post;