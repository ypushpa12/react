
import './App.css';
import Filter from './components/Filter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Category from './components/Category';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category/>
      <Filter/>
    </>
  );
}

export default App;
