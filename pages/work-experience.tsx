import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const WorkExperience: NextPage = () => {
  return (
    <div>
      <Header title="work experience" />
      <main>
        <div className="container">
          <Title title="work experience" />
          <ul>
            <li>
              Senior Front-End Developer,{' '}
              <span className="yellow-text">Akbank</span>, Sep 2022 - Present
            </li>
            <li>
              Front-End Developer,{' '}
              <span className="yellow-text">Okulistik</span>, Feb 2020 - Aug
              2022
            </li>
            <li>
              Front-End Developer, <span className="yellow-text">Itopya</span>,
              Jan 2018 - Jun 2019
            </li>
            <li>
              Front-End Developer,{' '}
              <span className="yellow-text">Treegroup</span>, Aug 2013 - Dec
              2017
            </li>
            <li>
              Web Developer Intern,{' '}
              <span className="yellow-text">Evrimnet Digital</span>, Jun 2012 -
              Aug 2012
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkExperience;
