import './App.css';
import {Routes, Route} from 'react-router-dom';
import FooterExample from './Components/FooterExample';
import Home from './Components/Home';
import Product from './Components/Product';


function App() {
  return (
    <div className="App m-1 bg-color-5">    

         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/product' element={<Product/>}/>
         </Routes>
         
         <FooterExample/>

    </div>
  );
}

export default App;
