import { FC } from "react";
import styles from "./Button.module.css"

type ButtonProps = {
    text: string;
}
export const Button:FC<ButtonProps> = ({text}) => {
  
    return (
        <button className={styles.MyButton}>{text}</button>
    )
}
