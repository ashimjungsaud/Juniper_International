//import { useState } from "react"

/*
const white = {background:'white'}
const blue = {background: 'blue'}
*/

export default function Card(props){
   
   /*const [color, setColor] = useState(white)*/

    return(  
        <div 
        className="Card w-60 h-64 bg-cyan-600 text-white text-lg font-bold 
        shrink-0 hover:bg-cyan-700 hover:shadow-2xl hover:text-white">
            <img src={props.src} alt="Product" className="w-60 h-48"></img>
            <p className="p-3">{props.name}</p>
        </div>
    )
}