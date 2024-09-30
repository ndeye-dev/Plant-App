

import React from "react";
import '../App.css';
import Eau from '../assets/eau.jfif';
import Soleil from '../assets/soleil.jfif';

const Care = ({ image1, image2 }) => {

    const eau = Array.from({ length: image1 }, (_, index) => (
        <img key={index} src={Eau} alt="" className='img-eau' />
    ));
    
    const soleil = Array.from({ length: image2 }, (_, index) => (
        <img key={index} src={Soleil} alt="" className='img-eau' />
    ));

    return (
        <div>
            {eau}
            {soleil}
        </div>
    );
};

export default Care;
