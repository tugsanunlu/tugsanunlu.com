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
            <li>Front-End Developer, Okulistik, Feb 2020 - Present</li>
            <li>Front-End Developer, Itopya, Jan 2018 - Jun 2019</li>
            <li>Front-End Developer, Treegroup, Aug 2013 - Dec 2017</li>
            <li>Web Developer Intern, Evrimnet Digital, Jun 2012 - Aug 2012</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkExperience;
