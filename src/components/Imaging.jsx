import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Imaging = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div className='flex items-center justify-center mt-10'>
            <div className='rounded-2xl' data-aos="fade-down" >
                <img
                    className='w-full h-full object-cover'
                    src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png?scale-down-to=512"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Imaging;
