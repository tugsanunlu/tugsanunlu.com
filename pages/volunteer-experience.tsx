import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const VolunteerExperience: NextPage = () => {
  return (
    <div>
      <Header title="volunteer experience" />
      <main>
        <div className="container">
          <Title title="volunteer experience" />
          <ul>
            <li>
              Contributing Writer,{' '}
              <span className="yellow-text">Mozilla Developer Network</span>,
              May 2020 - May 2021
            </li>
            <li>
              Contributing Writer,{' '}
              <span className="yellow-text">Wikipedia</span>, Oct 2016 - Present
            </li>
            <li>
              Independent Volunteer,{' '}
              <span className="yellow-text">Vote and Beyond</span>, Jul 2014 -
              Present
            </li>
            <li>
              Community Contributor, <span className="yellow-text">Pardus</span>
              , Jun 2009 - May 2011
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerExperience;
