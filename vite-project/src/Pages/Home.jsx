import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Resulthero from '../components/Resulthero';



import Footer from '../components/Footer';
import Maincard from '../components/Maincard';
import Focus from '../components/Focus';
import Winner from '../components/Winner';


import '../App.css'
import Helmet from '../components/Helmet';
import Initiative from '../components/Initiative';
import Next from '../components/Next';
import New from '../components/New';

import Form2 from '../components/Form2';

function home() {
  return (
    <div>
       <Navigation/>
        <Hero/>
       <Resulthero/>
       <Winner/>
       <Maincard/>
       <Focus/>
       <Helmet/>
       <Initiative/>
       <Next/>
       <New/>
       <Footer/>
      
    </div>
  )
}


export default home