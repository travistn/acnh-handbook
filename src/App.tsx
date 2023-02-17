import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Villagers from './pages/Villagers';
import Villager from './pages/Villager';
import Bugs from './pages/Bugs';
import Bug from './pages/Bug';
import Fishes from './pages/Fishes';
import Fish from './pages/Fish';
import SeaCreatures from './pages/SeaCreatures';
import SeaCreature from './pages/SeaCreature';
import Songs from './pages/Songs';
import Song from './pages/Song';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/villagers/page/:page' element={<Villagers />} />
        <Route path='/villagers/:villagerName' element={<Villager />} />
        <Route path='/bugs/page/:page' element={<Bugs />} />
        <Route path='/bugs/:bugName' element={<Bug />} />
        <Route path='/fish/page/:page' element={<Fishes />} />
        <Route path='/fish/:fishName' element={<Fish />} />
        <Route path='/sea-creatures/page/:page' element={<SeaCreatures />} />
        <Route path='/sea-creatures/:seaCreatureName' element={<SeaCreature />} />
        <Route path='/songs/page/:page' element={<Songs />} />
        <Route path='/songs/:songId' element={<Song />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
