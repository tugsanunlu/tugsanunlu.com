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
              Contributing Writer, Mozilla Developer Network, May 2020 - May
              2021
            </li>
            <li>Contributing Writer, Wikipedia, Oct 2016 - Present</li>
            <li>Independent Volunteer, Vote and Beyond, Jul 2014 - Present</li>
            <li>Community Contributor, Pardus, Jun 2009 - May 2011</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerExperience;
