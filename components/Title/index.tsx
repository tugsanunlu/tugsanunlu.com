import styles from './Title.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TitleProps = {
  title: string;
  icon?: object;
};

const Title = ({ title, icon }: TitleProps) => {
  return (
    <h2 className={styles.title}>
      {icon && <FontAwesomeIcon icon={icon as IconProp} size="xs" />} {title}
    </h2>
  );
};

export default Title;
