import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Itemcard from './Itemcard';
import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {

    const menuItems = [
        {
            "id": 1,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-01.jpg",
            "name": "Item 1",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            "id": 2,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-02.jpg",
            "name": "Item 2",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            "id": 3,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-03.jpg",
            "name": "Item 3",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            "id": 4,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-04.jpg",
            "name": "Item 4",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            "id": 5,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-05.jpg",
            "name": "Item 5",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            "id": 6,
            "img": "https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/menu-item-06.jpg",
            "name": "Item 6",
            "price": "Rs. 120",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
    ]


    return (
        <>
            <div className="extra"></div>
            <div className="menu-cont">
                <div className="container">
                    <div className="heading">
                        Our Menu
                    </div>
                    <h3 className='mt-2'>Our selection of cakes with <br />quality taste</h3>
                </div>
                <div className="row mt-5">
                    <OwlCarousel className="owl-theme" loop margin={10} autoplay nav items={3}>
                        {menuItems.map((item,index) => {
                            return (
                                <Itemcard item={item} id={index}/>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default Menu