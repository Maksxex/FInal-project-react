import styles from './style.module.css';
import {Switch, Route} from 'react-router-dom';
import Home from "../Home";
import Chat from "../Chat";
import Testapi from "../Testapi";
import Mainpage from "../mainpage";

const Main = () => {
    return (
    <div className={styles.container}>
        <Switch>
            <Route exact path='/' component={Mainpage} />
            <Route path='/Testapi' component={Testapi} />
            <Route path='/Home' component={Home}/>
            <Route path='/Chat' component={Chat} />
        </Switch>
    </div>
    );
};
export default Main;