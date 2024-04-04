// import * as React from "react";
import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export type Size = 'small' | 'large';
export type Color = 'purple' | 'gray';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: Size,
    color: Color,
    border?: 'rounded',
    sort?: string;
    setSort?: (sort: string) => void,
}

const Button = ({ size = 'large', color = 'gray', border, children, sort, setSort, ...props }: ButtonProps): JSX.Element => {

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
            console.log(e);
            console.log(sort);
            if (sort && setSort) setSort(sort);
        }
    };

    return (
        <button {...props} onClick={onClickButton} className={`${styles.button} ${styles[color]} ${styles[size]} ${border ? styles[border]: null}`}>
            {children}
        </button>
    );
};

export default Button;