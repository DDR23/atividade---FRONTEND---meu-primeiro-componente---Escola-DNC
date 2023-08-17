import './App.css';
import Footer from './components/sections/Footer';
import Googlename from './components/sections/Googlename';
import Navbar from './components/sections/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Googlename/>
      <Footer/>
    </div>
  );
}

export default App;
