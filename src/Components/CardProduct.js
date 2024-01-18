export default function CardProduct(props){

    return(

        // <div className='flex justify-between flex-wrap gap-4 md:justify-around'>
          <div
          className="Card w-72 h-80 bg-cyan-600 text-white text-lg font-bold 
          shrink-0 shadow-xl hover:bg-cyan-700 hover:shadow-2xl hover:text-white  capitalize hover:uppercase">
            <img src={props.image} alt="Product" className="w-72 h-64"></img>
            <p className="p-2">{props.name}</p>
          </div>
        // </div>
    )
}