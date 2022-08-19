import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Education: NextPage = () => {
  return (
    <div>
      <Header title="education" />
      <main>
        <div className="container">
          <Title icon={faStar} title="education" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
