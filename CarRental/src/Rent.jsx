import React from 'react'
import './App.css'
import Header from './components/Header';
import CarouselSlider from './components/CarouselSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collections from './components/Collections';
import Footer from './components/Footer';


function Rent() {
  return (
    <>
      <Header/>
      <CarouselSlider/>
      <Collections/>
      <Footer/>
    </>
  )
}

export default Rent
