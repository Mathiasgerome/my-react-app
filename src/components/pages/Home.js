import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import BandeauCallToAction from '../Bandeau_Call_To_Action';
import MapNumber from '../MapNumber';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <BandeauCallToAction />
      <MapNumber />
      <Footer />
    </>
  );
}

export default Home;