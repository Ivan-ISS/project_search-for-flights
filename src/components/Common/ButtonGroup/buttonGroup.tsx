// import * as React from "react";
import styles from './buttonGroup.module.scss';
import Button, { ButtonProps } from '../Button/button';

export type Size = 'small' | 'large';
export type Color = 'purple' | 'gray';

export interface ButtonGroupProps {
    options: string[],
    properties: ButtonProps,
}

const ButtonGroup = ({ options, properties }: ButtonGroupProps): JSX.Element => {

    return (
        <div className={styles.buttonGroup}>
            {options.map((option, index) => (
                <Button key={index} children={option} size={properties.size} color={properties.color}/>
            ))}
        </div>
    );
};

export default ButtonGroup;