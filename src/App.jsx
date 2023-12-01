// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Imaging from './components/Imaging';
import Feature from './components/Feature';
import Featuretwo from './components/Featuretwo';
import Featurethree from './components/Featurethree';
import Cardfeatures from './components/Cardsfeatures';
import Faqsection from './components/Faqsection';
import Pricingsection from './components/Pricingsection';
import Action from './components/Action';
import Bottom from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow">
        <Banner />
      </main>
      <Imaging/>
     <Feature/>
     <Featuretwo/>
     <Featurethree/>
     <Cardfeatures/>
     <Faqsection/>
     <Pricingsection/>
     <Action/>
     <Footer/>
      
    </div>
  );
}

export default App;
