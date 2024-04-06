// import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../../redux/store';
import { filterTicketsByTransfers } from '../../../redux/slices/ticketSlice';
import styles from './checkboxGroup.module.scss';
import Checkbox from '../Checkbox/checkbox';

export interface CheckboxGroupProps {
    options: string[],
    properties: {
        color: 'white' | 'purple',
        checked: boolean,
    },
}

const CheckboxGroup = ({ options, properties }: CheckboxGroupProps): JSX.Element => {
    const dispatch = useDispatch<RootDispatch>();
    const transfersName = useSelector((state: RootState) => state.dataTickets.transfersName);

    return (
        <div className={styles.checkboxGroup}>
            {options.map((option, index) => (
                <Checkbox
                key={index}
                label={option}
                color={properties.color}
                checked={transfersName.includes(option)}
                onClick={() => dispatch(filterTicketsByTransfers(option))}
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;