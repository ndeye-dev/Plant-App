import React from "react";
import '../App.css';
import card1 from '../assets/monstera.jpg'
import card2 from '../assets/img2.jpg'
import card3 from '../assets/img3.jpg'
import Care from './careScale';
import Catego from './categories';

const ShoppingList = () =>{
    return (
        <div>
            <Catego />
        <div className="d-flex justify-content-center align-items-center gap-5 shopp">
           
             {/* card1 */}
             <div className=' col-lg-3 card mt-3'>
                    <img src={card1} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 1</h5> 
                            <Care />
                            <button >Ajouter</button>
                        </div>
                </div>
                {/* card2 */}
                <div className=' col-lg-3 card mt-3'>
                    <img src={card2} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 2</h5>
                            <Care />
                            <button >Ajouter</button>
                        </div>
                </div>
                {/* card3 */}
                <div className=' col-lg-3 card mt-3'>
                    <img src={card3} className="card-img-top " alt="card"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Plante 3</h5>
                            <Care />
                            <button >Ajouter</button>
                        </div>
                </div>
        </div>
        </div>
    )
}
export default ShoppingList;
