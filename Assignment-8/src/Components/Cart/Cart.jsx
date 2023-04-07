import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);


    let bookmarkList = [];
    for(const singleValue of cart) {
        bookmarkList.push(singleValue);

        // bookmarkList.map(singleBook => console.log(singleBook))

    }

    return (
        <div>
                    
            <div className='mt-5 bookmark-section rounded-xl px-5 py-5'>
                <h4 className='font-bold text-xl'>Bookmarked Blogs: {cart.length}</h4>
                <div className='mt-3'>
                    {
                        bookmarkList.map(singleBook => <p key={singleBook.id} className='font-semibold bg-white mb-4 px-4 py-3 rounded shadow'>
                            {singleBook.blog_title}
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;