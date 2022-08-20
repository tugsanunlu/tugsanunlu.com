import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const Education: NextPage = () => {
  return (
    <div>
      <Header title="education" />
      <main>
        <div className="container">
          <Title title="education" />
          <ul>
            <li>
              Gazi University, Master’s degree, Computer Forensics, 2020 - 2022
            </li>
            <li>
              Anadolu University, Bachelor`&apos;`s degree, Business
              Administration, 2016 - 2020
            </li>
            <li>
              Marmara University, Associate`&apos;`s degree, Computer Technology
              and Programming, 2011 - 2013
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
