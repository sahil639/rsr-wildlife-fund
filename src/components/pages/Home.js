import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import Founders from '../Founders';
import HeroSection from '../HeroSection'


function Home() {
    return (
        <>
          <HeroSection />
          <Founders />
          <Cards />
          <Footer />
        </>
    )
}

export default Home;