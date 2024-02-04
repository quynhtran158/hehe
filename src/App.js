import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer'
import Disability from './Components/Map/Disability/Disability';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Disability />
    <Footer />
    </div>

  );
}

export default App;
