import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  icon?: object;
};

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {icon && <FontAwesomeIcon icon={icon as IconProp} />} {text}
    </button>
  );
};

export default Button;
