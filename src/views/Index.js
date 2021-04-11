/**
 * /*!
 *
 * =========================================================
 * Argon Design System React - v1.1.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/argon-design-system-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
 *
 * Coded by Creative Tim
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

import Hero from 'components/Hero/Hero';
import React, { useRef } from 'react';
import Navbar from '../components/Navbars/DemoNavbar';
import Footer from 'components/Footers/SimpleFooter';
import Card3 from 'components/CardsThree/Card3';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import Feature6 from 'components/Features/Feature6';

const Index = () => {
  const frontend = useRef(null);
  const backend = useRef(null);
  const database = useRef(null);
  const scrollTo = (to) => {
    switch (to) {
      case 'FrontEnd':
        frontend.current.scrollIntoView();
        break;
      case 'BackEnd':
        backend.current.scrollIntoView();
        break;
      case 'Database':
        database.current.scrollIntoView();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Hero />
      <Card3 />
      <Features myref={frontend} />
      <Customers myref={backend} />
      <Feature6 myref={database} />
      <Footer />
    </>
  );
};

export default Index;
