import React from 'react';
import Header from '../components/Header';
import Highlights from '../components/Highlights';
import Main from '../components/Main';
import Properties from '../components/Properties';
import NewProperty from '../components/NewProperty'
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Properties />
      <Highlights/>
      <NewProperty />
      <Footer/>
    </div>
  )
}

export default Home