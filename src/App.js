import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar />
        <LandingPage />
        <Footer />
    </div>
  )
}

export default App;