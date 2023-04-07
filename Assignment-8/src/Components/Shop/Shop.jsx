import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import ShowTime from '../ShowTime/ShowTime';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([]);
    
    const bookmark = (product) => {

        let newCart = [...cart, product];
        setCart(newCart);
        
        const { blog_title, id } = product;
        const newAdd = { id, blog_title, bookmarked: true};
        const previousBookmark = JSON.parse(localStorage.getItem("bookmarked"));
        let bookmarked = [];
        
        if(previousBookmark) {
            const isThisProductMarked = previousBookmark.find((pd) => pd.id == id);
            
            if(isThisProductMarked) {
                toast.warning('You Have Already Bookmarked This Blog.');
            }
            else {
                bookmarked.push(...previousBookmark, newAdd);
                
                localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
                console.log(bookmarked);
            }
        }

        else {
            bookmarked.push(newAdd);
            localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
        }
    }

    const handleTime = (timing) => {
        let newTime = [...time, timing];
        setTime(newTime);
    }

    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='shop-container flex flex-col md:flex-row md:justify-between'>
                <div className="product-container md:mr-8 mb-10 w-11/12 md:w-7/12">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            bookmark={bookmark}
                            handleTime={handleTime}
                        ></Product> )
                    }
                </div>

                <div className="bookmarked w-11/12 md:w-4/12">
                    
                    <ShowTime time={time}></ShowTime>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;