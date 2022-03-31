import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>Como fazer</li>
        <li className={styles.menu__item}>Ofertas</li>
        <li className={styles.menu__item}>Depoimentos</li>
        <li className={styles.menu__item}>Vídeos</li>
        <li className={styles.menu__item}>Meu carrinho</li>
      </ul>
    </nav>
  );
}
