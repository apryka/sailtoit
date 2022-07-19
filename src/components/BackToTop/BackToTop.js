import { GrUp as UpIcon } from 'react-icons/gr';

import styles from './BackToTop.module.scss';

const BackToTop = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <UpIcon color={'white'} />
    </div>
  );
};

export default BackToTop;
