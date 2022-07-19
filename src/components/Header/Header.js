import Container from 'components/Container';

import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>{children}</Container>
    </header>
  );
};

export default Header;
