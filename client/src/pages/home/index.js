import{ Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';
import { useState } from 'react';


const Home = () => {
  const [showContact , setShowContact] = useState(false);


   return (
      <div className="App">
        <div className="gradient__bg">
            <Navbar showContact={showContact} setShowContact={setShowContact}/>
            <Header />
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <div className="brand">
        <Brand /></div>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA setShowContact={setShowContact}/>
        <Blog />
        <Footer setShowContact={setShowContact}/>
        </div>
    </div>
   )
}

export default Home