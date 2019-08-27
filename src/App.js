import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import About from './Components/About/About'
import OurWork from './Components/OurWork/OurWork'
import OurServices from './Components/OurServices/OurServices'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <HeroBanner />
        <About />
        <OurWork/>
        <OurServices />
        <ContactSection />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
