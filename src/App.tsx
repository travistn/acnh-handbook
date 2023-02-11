import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Villagers from './pages/Villagers';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/villagers' element={<Villagers />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
