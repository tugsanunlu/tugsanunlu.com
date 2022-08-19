import Head from 'next/head';
import { Fragment } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

type HeaderProps = {
  title?: string;
};

const routes = [
  { title: 'home', path: '/' },
  { title: 'work experience', path: '/work-experience' },
  { title: 'education', path: '/education' },
  { title: 'volunteer experience', path: '/volunteer-experience' },
  { title: 'contact', path: '/contact' },
];

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{`${title} | tuğsan ünlü - front-end developer`}</title>
        <meta name="description" content="tuğsan ünlü - front-end developer" />
      </Head>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.navbarContainer}>
            <Link href="/">
              <div style={{ cursor: 'pointer' }}>
                <div className={styles.title}>tuğsan ünlü</div>
                <div className={styles.subTitle}>front-end developer</div>
              </div>
            </Link>
            <ul className={styles.navbar}>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>
                    <a
                      className={
                        router.pathname === `${route.path}` ? styles.active : ''
                      }
                    >
                      {route.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
