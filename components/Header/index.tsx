import Head from 'next/head';
import { Fragment } from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Fragment>
      <Head>
        <title>{`${title} | tuğsan ünlü - front-end developer`}</title>
        <meta name="description" content="tuğsan ünlü - front-end developer" />
      </Head>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.title}>tuğsan ünlü</div>
          <div className={styles.subTitle}>front-end developer</div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
