// import * as React from "react";
import styles from './radioGroup.module.scss';
import Radio from '../Radio/radio';

export interface CheckboxGroupProps {
    options: string[],
    properties: {
        color: 'white' | 'purple',
        name?: string,
    },
}

const RadioGroup = ({ options, properties }: CheckboxGroupProps): JSX.Element => {

    return (
        <div className={styles.radioGroup}>
            {options.map((option, index) => (
                <Radio key={index} label={option} color={properties.color} name={properties.name}/>
            ))}
        </div>
    );
};

export default RadioGroup;