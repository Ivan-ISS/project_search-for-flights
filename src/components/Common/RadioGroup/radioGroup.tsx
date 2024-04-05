// import * as React from "react";
import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../../redux/store';
import { filterTicketsByCompany } from '../../../redux/slices/ticketSlice';
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
    const dispatch = useDispatch<RootDispatch>();

    let filter: () => void;

    return (
        <div className={styles.radioGroup}>
            {options.map((option, index) => {
                filter = () => dispatch(filterTicketsByCompany(option));
                return (
                    <Radio
                        key={index}
                        label={option}
                        color={properties.color}
                        name={properties.name}
                        onClick={filter}
                    />
                );
            })}
        </div>
    );
};

export default RadioGroup;