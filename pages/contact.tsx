import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const Contact: NextPage = () => {
  return (
    <div>
      <Header title="contact" />
      <main>
        <div className="container">
          <Title title="contact" />
          <ul>
            <li>
              email:{' '}
              <a href="mailto:unlutugsan@gmail.com">unlutugsan@gmail.com</a>
            </li>
            <li>
              gpg:{' '}
              <a
                href="https://keyserver.ubuntu.com/pks/lookup?search=0xb229e37a61b4740e&fingerprint=on&op=index"
                target="_blank"
                rel="noreferrer"
              >
                0xb229e37a61b4740e
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
