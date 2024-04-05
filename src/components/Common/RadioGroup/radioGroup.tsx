// import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../../redux/store';
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
    const filterName = useSelector((state: RootState) => state.dataTickets.filteredCompanies);

    return (
        <div className={styles.radioGroup}>
            {options.map((option, index) => 
                <Radio
                    key={index}
                    label={option}
                    color={properties.color}
                    name={properties.name}
                    checked={filterName.includes(option)}
                    onClick={() => dispatch(filterTicketsByCompany(option))}
                />
            )}
        </div>
    );
};

export default RadioGroup;