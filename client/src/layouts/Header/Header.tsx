import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className={styles.header}>
      <h1  className={styles.header__burger}>Burger</h1>
        <Link to={'/'}><h1>Logo</h1></Link>
        <nav className={styles.header__nav}>
        <ul  className={styles.nav__list}>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}
