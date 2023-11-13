import styles from './style.module.css';

const Mainpage = () => {
    return (
        <main className={styles.image}>
            <nav className={styles.navbar}>
                <div className={styles.text}>Привет! Я рад видеть тебя на моём сайте! Здесь ты можешь ­­с­ лекгостью выбрать фильм или сер­иалы, узнав всю нужную тебе информацию
                , ну и конечно пообщаться в чате. Наслаждайся!
                </div>
            </nav>
        </main>
    );
};

export default Mainpage;