import Link from 'next/link';

import { categoryPathBySlug } from 'lib/categories';
import styles from './Pill.module.scss';

const Pill = ({ name, slug }) => {
  return (
    <Link href={categoryPathBySlug(slug)}>
      <a className={styles.pill}>{name}</a>
    </Link>
  );
};

export default Pill;
