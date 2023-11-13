import {Link} from 'react-router-dom'
import styles from "./style.module.css";

const Comment = (props) => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}
            placeholder='напишите комментарий'
            />
            <button className={styles.btn} onClick={props.sendChat}>отправить</button>
            <button className={styles.btn} onClick={() => props.setChatData([])}>Удалить</button>

            {props.showDialogReg && (
                <div className={styles.link}>
                    Вы не авторизовались перейдите по  <Link className={styles.linker} to ='Home'>ссылке</Link>
                </div>
            )}
        </div>
    );
};
export default Comment;