import React from "react";
import '../App.css';
import Eau from '../assets/eau.jfif'
import Soleil from '../assets/soleil.jfif'

const Shoppinglist = () => {
    return(
        <div>
            <img src={Eau} alt="" className='img-eau'/>
            <img src={Eau} alt="" className='img-eau'/>
            <br />
            <img src={Soleil} alt="" className='img-eau'/>
            <img src={Soleil} alt="" className='img-eau'/>
            <img src={Soleil} alt="" className='img-eau'/>


        </div>
    )
}
export default Shoppinglist;