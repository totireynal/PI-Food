import React from "react";
import style from './Message.module.css';
import { useNavigate } from "react-router-dom";

const Message = ({message}) => {
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate(0);
    }

    return (
        <div className={style.message}>
            <div className={style.card}>
               <p className={style.title}>Error</p>
               <p>{message}</p>
               <button onClick={handlerClick} className={style.closebtn}>Close</button>
            </div>
        </div>
    )
}


export default Message;