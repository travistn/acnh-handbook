import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Villagers from './pages/Villagers';
import Villager from './pages/Villager';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/villagers/page/:page' element={<Villagers />} />
        <Route path='/villagers/:villagerName' element={<Villager />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
