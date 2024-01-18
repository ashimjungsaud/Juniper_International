import React from "react";
import Card from "./Card.js";
// import UrologyImg from "./Images/UrologyImg.png";
// import InfusionAndTransfusionImg from './Images/InfusionAndTransfunsionImg.png';
// import GlovesImg from './Images/GlovesImg.png';
// import OrthopaedicImg from './Images/OrthopaedicImg.png';
// import LockerImg from './Images/Locker.jpeg';
// import {Routes,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Products(props){
    

  const navigate = useNavigate();

      return(
          <div className="Products pb-3">
          <h1 className="font-extrabold text-3xl py-6 text-slate-800">Our Products</h1>
            <div className="Cards flex justify-around flex-wrap p-2 gap-y-4">
              <Card src={"/Images/UrologyImg.png"} name= "Urology"/>
              <Card src={"/Images/i2.jpg"} name="Infusion & Transfusion"/>
              <Card src={"/Images/GlovesImg.png"} name="Gloves"/>
              <Card src={"/Images/OrthopaedicImg.png"} name="Orthopaedic"/>
              <Card src={"/Images/Locker.jpeg"} name="Locker"/>
           </div>

           <button className='productButton bg-cyan-600 rounded-lg p-2 text-white hover:bg-cyan-800 hover:p-3' 
           onClick={() => navigate('product')}>
               View All Products
           </button>

          </div>
      )
}