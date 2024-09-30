
import React from "react";
import '../App.css';
import Card1 from '../assets/monstera.jpg';
import Card2 from '../assets/img2.jpg';
import Card3 from '../assets/img3.jpg';
import Care from './careScale';
import Catego from './categories';

const ShoppingList = () => {
    const plants = [
        { image: Card1, image1: 1, image2: 3 },
        { image: Card2, image1: 2, image2: 2 },
        { image: Card3, image1: 3, image2: 2 },
    ];

    return (
        <div>
            <Catego />
            <div className="d-flex justify-content-center align-items-center gap-5 shopp">
                {plants.map(plant => (
                    <div className='col-lg-3 card mt-3'>
                        <img src={plant.image} className="card-img-top" />
                        <div className='card-body'>
                            <h5 className='card-title'>{plant.name}</h5>
                            <Care image1={plant.image1} />
                            <Care image2={plant.image2} />
                            <button>Ajouter</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingList;
