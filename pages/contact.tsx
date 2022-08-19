import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Contact: NextPage = () => {
  return (
    <div>
      <Header title="contact" />
      <main>
        <div className="container">
          <Title icon={faStar} title="contact" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
