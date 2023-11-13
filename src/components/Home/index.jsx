import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './style.module.css';
import {useState} from 'react'

const Home = () => {
const [user, setUser] = useLocalStorage("NAME", "");
const [inputValue, setInputValue] = useState("");


return (
    <div>
        {user&& (
            <div>
                <div className={styles.labels}>Приветствую вас увжаемый {user}</div>
                <button className={styles.btn2} onClick={() => setUser('')}>Выйти</button>
            </div>
        )}

        {!user&&(
            <div>
                <input className={styles.input}
                placeholder='Введите логин'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={styles.btn} onClick={() => setUser(inputValue)}>Сохранить</button>
            </div>
        )}
    </div>
    )
};
export default Home;