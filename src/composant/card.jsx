import React from 'react';
import '../App.css';
import card1 from '../assets/monstera.jpg'
import card2 from '../assets/img2.jpg'
import card3 from '../assets/img3.jpg'

import Catego from './categories';

const Card = () => {
    return (
        <div className='container-fluid'>
            <Catego /> 
            <div className='row mt-3'>
                <div className=' col-lg-3 border border-warning border-4 bg-success text-white'>
                    <p className='text-end'>Fermer</p>
                    <div className='m-3'>
                        <h2>Panier</h2>
                        <ul>
                            <li>1 Plante 25€</li>
                            <li>1 Plante 5€</li>
                        </ul>
                        <h3>Total :30€</h3>
                        <button onClick={() => updateCart([])}>Vider le panier</button>
                    </div>
                </div>
                
                {/* card1 */}
                <div className=' col-lg-3 card'>
                    <img src={card1} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 1</h5>
                            <p className='card-text'></p>
                            <button >Ajouter</button>
                        </div>
                </div>
                {/* card2 */}
                <div className=' col-lg-3 card'>
                    <img src={card2} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 2</h5>
                            <p className='card-text'></p>
                            <button >Ajouter</button>
                        </div>
                </div>
                {/* card3 */}
                <div className=' col-lg-3 card'>
                    <img src={card3} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 3</h5>
                            <p className='card-text'></p>
                            <button >Ajouter</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Card;