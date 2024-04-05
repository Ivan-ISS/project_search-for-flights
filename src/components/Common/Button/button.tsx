// import * as React from "react";
import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export type Size = 'small' | 'large';
export type Color = 'purple' | 'gray';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: Size,
    color: Color,
    isActive?: boolean,
    border?: 'rounded',
}

const Button = ({ size = 'large', color = 'gray', isActive, border, children, ...props }: ButtonProps): JSX.Element => {

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
            console.log(e);
        }
    };

    return (
        <button {...props} onClick={onClickButton} className={`${styles.button} ${styles[color]} ${styles[size]} ${border ? styles[border]: null} ${isActive ? styles.active : null}`}>
            {children}
        </button>
    );
};

export default Button;