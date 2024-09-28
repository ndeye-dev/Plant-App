import React from 'react';
import '../App.css';
import ShoppingList from './shoppingLst';


const Card = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className=' col-lg-3 border border-warning border-4 bg-success text-white'>
                    <div className='text-end'>
                    <button type='button' className='btn text-white '>Fermer</button>
                    </div>
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
                <div className='col-lg-7'>
                <ShoppingList />
                </div>
                
            </div>
        </div>
    );
};

export default Card;