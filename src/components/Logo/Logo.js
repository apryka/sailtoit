import Image from 'next/image';
// import styles from './Button.module.scss';

import logo from './logo.svg';

const Logo = ({ width = 240, height = 40, alt }) => {
  return <Image src={logo} alt={alt} width={width} height={height} />;
};

export default Logo;
