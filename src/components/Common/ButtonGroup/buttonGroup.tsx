// import * as React from "react";
import styles from './buttonGroup.module.scss';
import Button, { ButtonProps } from '../Button/button';

export interface ButtonGroupProps {
    options: string[],
    properties: ButtonProps,
}

const ButtonGroup = ({ options, properties }: ButtonGroupProps): JSX.Element => {

    return (
        <div className={styles.buttonGroup}>
            {options.map((option, index) => (
                <Button key={index} children={option} sort={option} size={properties.size} color={properties.color} setSort={properties.setSort} onClick={() => null}/>
            ))}
        </div>
    );
};

export default ButtonGroup;