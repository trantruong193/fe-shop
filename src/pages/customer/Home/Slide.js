import React from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import {Button} from "antd";

const Slide = ({items}) => {
    return (
        <Carousel>
            {items.map(slide =>
                <CarouselItem key={slide.id}>
                    <img src={slide.image} alt="" className='object-fit-cover rounded-3 w-100'/>
                    <Carousel.Caption className='mb-5 text-start'>
                        <h3 className='text-dark'>{slide.title}</h3>
                        <p className='text-dark'>{slide.content}</p>
                        <Button type='ghost' size='middle' className='bg-warning'><span className='fw-bold'>Shop now</span></Button>
                    </Carousel.Caption>
                </CarouselItem>)
            }
        </Carousel>
    );
};

export default Slide;