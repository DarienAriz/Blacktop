import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrendingNow from './components/TrendingNow';
import Categories from './components/Categories';
import Hero from './components/Hero';
import NewDrop from './components/NewDrop';
import './App.css'

function App() {
  return (
    
      <div className="bg-gray-300 min-h-screen">
        <div className="max-w-screen-2xl w-[95%] mx-auto bg-white">
           <Navbar />
            <Hero />
            <TrendingNow />
            <Categories />
            <NewDrop />
            <Footer />
          </div>
      </div>
      
  );
  
}
export default App
