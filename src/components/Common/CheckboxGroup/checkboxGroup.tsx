// import * as React from "react";
import styles from './checkboxGroup.module.scss';
import Checkbox from '../Checkbox/checkbox';

export interface CheckboxGroupProps {
    options: string[],
    properties: {
        color: 'white' | 'purple',
        checked: boolean,
        onChange: (checked: boolean) => void,
    },
}

const CheckboxGroup = ({ options, properties }: CheckboxGroupProps): JSX.Element => {

    return (
        <div className={styles.checkboxGroup}>
            {options.map((option, index) => (
                <Checkbox key={index} label={option} color={properties.color} checked={properties.checked} onChange={properties.onChange}/>
            ))}
        </div>
    );
};

export default CheckboxGroup;