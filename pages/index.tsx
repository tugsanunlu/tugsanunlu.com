import type { NextPage } from 'next';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Header title="home" />
      <main>
        <div className="container">
          <Title title="hi there 👋" />
          <p>
            I&apos;m an Istanbul-based{' '}
            <span className="yellow-text">Front-End Developer</span>.
          </p>
          <p>
            I have 8+ years of experience in{' '}
            <span className="yellow-text">
              agency, e-commerce, and e-learning projects
            </span>
            .
          </p>
          <p>
            I have been working at{' '}
            <a
              href="https://okulistik.com/"
              target="_blank"
              rel="noreferrer"
              className="yellow-text"
            >
              Okulistik
            </a>{' '}
            since February 2020.
          </p>
          <div className="tags">
            <Button text="#javascript" />
            <Button text="#react" />
            <Button text="#webpack" />
            <Button text="#cypress" />
            <Button text="#jest" />
            <Button text="#testing-library" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
