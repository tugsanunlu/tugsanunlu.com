import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faMedium,
  faLinkedin,
  faKeybase,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ILink {
  icon: object;
  url: string;
}

const links: ILink[] = [
  {
    icon: faTwitter,
    url: 'https://twitter.com/tugsanunlu',
  },
  {
    icon: faInstagram,
    url: 'https://instagram.com/tugsanunlu',
  },
  {
    icon: faGithub,
    url: 'https://github.com/tugsanunlu',
  },
  {
    icon: faMedium,
    url: 'https://medium.com/@tugsanunlu',
  },
  {
    icon: faKeybase,
    url: 'https://keybase.io/tugsanunlu',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/tugsanunlu',
  },
  {
    icon: faTheaterMasks,
    url: 'https://tiyatrogunlugu.com',
  },
  {
    icon: faEnvelope,
    url: 'mailto:unlutugsan@gmail.com',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerLinks}>
        {links.map((link, index) => (
          <a
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <FontAwesomeIcon icon={link.icon as IconProp} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
