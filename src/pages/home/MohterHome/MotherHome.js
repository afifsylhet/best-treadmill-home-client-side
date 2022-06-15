

import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const MotherHome = () => {
    return (
        <div style={{ backgroundColor: '#F4FCD9' }}>
            <Banner></Banner>

            <div className="mx-1">
                <Products></Products>
                <Reviews></Reviews>
                <Faq></Faq>
            </div>

        </div >
    );
};

export default MotherHome;