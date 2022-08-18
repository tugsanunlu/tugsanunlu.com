import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Header title="anasayfa" />
      <main>
        <div className="container"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
