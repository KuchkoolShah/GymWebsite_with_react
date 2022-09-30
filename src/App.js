import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Planes from './components/Planes/Planes';
import Programs from './components/Programs/Programs';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Planes/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
