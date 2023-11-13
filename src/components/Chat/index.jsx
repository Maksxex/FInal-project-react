import ChatBlock from './Chat-block';
import Comment from './comments';
import styles from './style.module.css';
import { useState } from 'react';
import {useLocalStorage} from "../../hook/useLocalStorage";



const Chat = () => {
    const [chatData, setChatData] = useLocalStorage("CHAT", []);
    const [inputValue, setInputValue] = useState('');
    const [showDialogReg, setShowDialogReg] = useState(false);
    const [NAME] = useLocalStorage("NAME");
    
    console.log(chatData);

    const sendChat = () => {

        if (NAME) {
            setChatData([...chatData, `${NAME}: ${inputValue}`]);
            setInputValue("");
        } else {
            setShowDialogReg(true);
            setInputValue("");
        }
    };
    return (
    <div>
        <ChatBlock chatData={chatData} />
        <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendChat={sendChat}
        setChatData={setChatData}
        showDialogReg={showDialogReg}
        />
    </div>
    )
};
export default Chat;