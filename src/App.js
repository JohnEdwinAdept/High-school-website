import React from 'react';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Destinations />
      <Search />    
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
