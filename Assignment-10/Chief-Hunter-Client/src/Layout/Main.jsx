import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Banner from '../components/banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}

            <div className=''>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;