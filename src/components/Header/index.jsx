import styles from './style.module.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return <div className={styles.container}>
        <nav className={styles.navbar}>
            <Link to='/'><button className={styles.dropbtn}>Главная страница</button></Link>
            <Link to='/Testapi'><button className={styles.dropbtn}>каталог фильмов</button></Link>
            <Link to='/Home'><button className={styles.dropbtn}>авторизация</button></Link>
            <Link to='/Chat'><button className={styles.dropbtn}>чат</button></Link>
        </nav>
    </div>
};
export default Header;