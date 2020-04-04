import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'components/lottie/Lottie'

import 'components/landing/Header/Header.scss'

const laptop = require('assets/lotties/ecommerce.json')

const Header = () => (
  <section className="header">
    <div className="container">
      <div>
        <h1>A simple dream cost calculator</h1>
        <p>Create realistic budget goals for your dreams!</p>
        <Link 
          className="header-button button"
          to="/register" >
          Learn how
        </Link>
      </div>
      
      <Lottie animationData={laptop} />
    </div>
  </section>
);


export default Header;
