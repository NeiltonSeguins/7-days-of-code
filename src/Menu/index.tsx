import logo from 'assets/logo.png';
import styles from './Menu.module.css';
import Navbar from './Navbar';

export default function Menu() {
  return (
    <header className={styles.container}>
      <img className={styles.menu__image} src={logo} alt='Logo da casa verde' />
      <Navbar />
    </header>
  );
}
