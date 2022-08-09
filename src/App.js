import React from 'react';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar />
        <Hero />
        <Featured />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default App;