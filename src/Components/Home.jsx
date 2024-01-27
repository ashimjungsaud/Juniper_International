import Motto from './Motto';
import About from './About';
import Products from './Products';
import Navbar from './Navbar';



function Home() {
  return (
    <div className="App bg-color-5 text-slate-700">    
         <Navbar/> 
         <Motto/>
         <About/>
         <Products/>
    </div>
  );
}

export default Home;