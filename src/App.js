import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';


function App() {
  return (
    <div className="App m-1 bg-color-5">    

         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/product' element={<Product/>}/>
         </Routes>
         
         <Footer/>

    </div>
  );
}

export default App;
