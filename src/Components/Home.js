import Motto from './Motto';
import About from './About';
import Products from './Products';
import Navbar from './Navbar';



function Home() {
  return (
    <div className="App m-1 bg-color-5">    
         <Navbar/> 
         <Motto/>
         <About/>
         <Products/>
    </div>
  );
}

export default Home;