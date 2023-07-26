import React from "react";
import product from "../product/product-1.jpg";
import product1 from "../product/product-2.jpg";
import product2 from "../product/product-3.jpg";
import product3 from "../product/product-4.jpg";
import product4 from "../product/product-5.jpg";
import product5 from "../product/product-6.jpg";
import product6 from "../product/product-7.jpg";
import product7 from "../product/product-8.jpg";
import product8 from "../product/product-9.jpg";
import product9 from "../product/product-10.jpg";
import product10 from "../product/product-11.jpg";
import product11 from "../product/product-12.jpg";
import product12 from "../product/product-13.jpg";
import product13 from "../product/product-14.jpg";
import product14 from "../product/product-15.jpg";

import post1 from "../product/post-1.jpg";
import post2 from "../product/post-2.jpg";
import post3 from "../product/post-3.jpg";
import post4 from "../product/post-4.jpg";
import post5 from "../product/post-5.jpg";
import post6 from "../product/post-6.jpg";
import post7 from "../product/post-7.jpg";
import post8 from "../product/post-8.jpg";
import post9 from "../product/post-9.jpg";
import post10 from "../product/post-10.jpg";

export const navigators = [
    {
        name: 'Home',
        link: '/',
        items: [
            {
                key: '1',
                label: (<span className='fw-bold'>Feature Products</span>),
                link: '/',
            },
            {
                key: '2',
                label: (<span className='fw-bold'>Best Seller</span>),
                link: '/',
            },
            {
                key: '3',
                label: (<span className='fw-bold'>New Arrival</span>),
                link: '/',
            },
            {
                key: '4',
                label: (<span className='fw-bold'>Latest New</span>),
                link: '/',
            }
        ]
    },
    {
        name: 'Product',
        link: '/products',
        items: [
            {
                key: '1',
                label: (<span className='fw-bold'>Machinary</span>),
                link: '/',
            },
            {
                key: '2',
                label: (<span className='fw-bold'>Hand Tools</span>),
                link: '/',
            },
            {
                key: '3',
                label: (<span className='fw-bold'>Storage & Organization</span>),
                link: '/',
            },
            {
                key: '4',
                label: (<span className='fw-bold'>Electrical</span>),
                link: '/',
            }
        ]
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'Account',
        link: '/account',
        items: [
            {
                key: '1',
                label: (<span className='fw-bold'>Account Setting</span>),
                link: '/',
            },
            {
                key: '2',
                label: (<span className='fw-bold'>Forget Password</span>),
                link: '/',
            },
            {
                key: '3',
                label: (<span className='fw-bold'>Register New Account</span>),
                link: '/',
            },
            {
                key: '4',
                label: (<span className='fw-bold'>Customer Service</span>),
                link: '/',
            }
        ]
    },
    {
        name: 'Blogs',
        link: '/blogs',
    },
]
export const categories = [
    {
        id: 'category100',
        title: 'Power tools',
        items: [
            {
                key: 'category1001',
                label: (<span className='fw-bold'>Engravers</span>),
            },
            {
                key: 'category1002',
                label: (<span className='fw-bold'>Drills</span>),
            },
            {
                key: 'category1003',
                label: (<span className='fw-bold'>Plumbing</span>),
            },
            {
                key: 'category1004',
                label: (<span className='fw-bold'>Wall Chaser</span>),
            },
            {
                key: 'category1005',
                label: (<span className='fw-bold'>Pneumatic Tools</span>),
            },
            {
                key: 'category1006',
                label: (<span className='fw-bold'>Milling Cutters</span>),
            },
        ]
    },
    {
        id: 'category101',
        title: 'Hand tools',
        items: [
            {
                key: 'category1011',
                label: (<span className='fw-bold'>Screwdrivers</span>),
            },
            {
                key: 'category1012',
                label: (<span className='fw-bold'>Handsaws</span>),
            },
            {
                key: 'category1013',
                label: (<span className='fw-bold'>Knives</span>),
            },
            {
                key: 'category1014',
                label: (<span className='fw-bold'>Axes</span>),
            },
            {
                key: 'category1015',
                label: (<span className='fw-bold'>Multi Tools</span>),
            },
            {
                key: 'category1016',
                label: (<span className='fw-bold'>Paint Tools</span>),
            },
        ]
    },
    {
        id: 'category102',
        title: 'Machine tools',
        items: [
            {
                key: 'category1021',
                label: (<span className='fw-bold'>Thread Cutting</span>),
            },
            {
                key: 'category1022',
                label: (<span className='fw-bold'>Chip Blowers</span>),
            },
            {
                key: 'category1023',
                label: (<span className='fw-bold'>Sharpening Machines</span>),
            },
            {
                key: 'category1024',
                label: (<span className='fw-bold'>Pipe Cutters</span>),
            },
            {
                key: 'category1024',
                label: (<span className='fw-bold'>Slotting Machines</span>),
            },
            {
                key: 'category1024',
                label: (<span className='fw-bold'>Lathes</span>),
            },
        ]
    },
    {
        id: 'category103',
        title: 'Building Supplies'
    },
    {
        id: 'category104',
        title: 'Electrical'
    },
    {
        id: 'category105',
        title: 'Power Machinery'
    },
    {
        id: 'category106',
        title: 'Measurement'
    },
    {
        id: 'category107',
        title: 'Clothes & PPE'
    },
    {
        id: 'category108',
        title: 'Plumbing'
    },
    {
        id: 'category109',
        title: 'Storage & Organization',
    },
    {
        id: 'category110',
        title: 'Welding & Soldering'
    },
]

export const products = [
    {
        id: 'product1000',
        name: 'Electric Planer Brandix',
        price: 749,
        star: 4,
        reviews: 10,
        image: product,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1001',
        name: 'Undefined tool',
        price: 900,
        star: 4,
        reviews: 10,
        image: product1,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1002',
        name: 'Drill Screwdriver',
        price: 900,
        star: 4,
        reviews: 10,
        image: product2,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1003',
        name: 'Drill Series 3',
        price: 900,
        star: 4,
        reviews: 10,
        image: product3,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1004',
        name: 'Router Power Tool',
        price: 900,
        star: 4,
        reviews: 10,
        image: product4,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1005',
        name: 'Drilling Machine',
        price: 900,
        star: 4,
        reviews: 10,
        image: product5,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1006',
        name: 'Plier',
        price: 900,
        star: 4,
        reviews: 10,
        image: product6,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1007',
        name: 'Water house',
        price: 900,
        star: 4,
        reviews: 10,
        image: product7,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1008',
        name: 'Spanner wrench',
        price: 900,
        star: 4,
        reviews: 10,
        image: product8,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1009',
        name: 'Water tap',
        price: 900,
        star: 4,
        reviews: 10,
        image: product9,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1010',
        name: 'Hand tool kit',
        price: 900,
        star: 4,
        reviews: 10,
        image: product10,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1011',
        name: 'Ash Chainsaw',
        price: 900,
        star: 4,
        reviews: 10,
        image: product11,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1012',
        name: 'Angle grinder brandix',
        price: 900,
        star: 4,
        reviews: 10,
        image: product12,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1013',
        name: 'Air compressor brandix',
        price: 900,
        star: 4,
        reviews: 10,
        image: product13,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    },
    {
        id: 'product1014',
        name: 'Electric jigsaw',
        price: 900,
        star: 4,
        reviews: 10,
        image: product14,
        speed: 750,
        powerSource: "Cordless-electric",
        batteryType: "Lithium",
        voltage: 24,
        capacity: 2
    }
]

export const posts = [
    {
        id: 'post1001',
        title: 'Philosophy That Addresses Topics Such As Goodness',
        date: 'March 19, 2023',
        image: post1,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1002',
        title: 'Logic Is The Study Of Reasoning And Argument Part 2',
        date: 'March 19, 2023',
        image: post2,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1003',
        title: 'Some Philosophers Specialize In One Or More Historical Periods',
        date: 'March 19, 2023',
        image: post3,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1004',
        title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
        date: 'March 19, 2023',
        image: post4,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1005',
        title: 'Germany Was The First Country To Professionalize Philosophy',
        date: 'March 19, 2023',
        image: post5,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1006',
        title: 'Logic Is The Study Of Reasoning And Argument Part 1',
        date: 'March 19, 2023',
        image: post6,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1007',
        title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
        date: 'March 19, 2023',
        image: post7,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1008',
        title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
        date: 'March 19, 2023',
        image: post8,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1009',
        title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
        date: 'March 19, 2023',
        image: post9,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    },
    {
        id: 'post1010',
        title: 'Engineers Use Many Methods To Minimize Logic Functions',
        date: 'March 19, 2023',
        image: post10,
        content: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...',
    }
]
