import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../../redux/store';
import { /* sortTicketsPrice, sortTicketsTransfer, */ /* filterTicketsByCompany, */ sortSwitch } from '../../../redux/slices/ticketSlice';
import styles from './buttonGroup.module.scss';
import Button, { ButtonProps } from '../Button/button';

export interface ButtonGroupProps {
    options: string[],
    properties: ButtonProps,
}

const ButtonGroup = ({ options, properties }: ButtonGroupProps): JSX.Element => {
    const dispatch = useDispatch<RootDispatch>();

    let sort: () => void;

    /* options.forEach(element => {
        if (element === 'Самый дешевый') { sort = () => dispatch(sortTicketsPrice()); }
        if (element === 'Самый оптимальный') { sort = () => dispatch(sortTicketsTransfer()); }
    }); */


    return (
        <div className={styles.buttonGroup}>
            {options.map((option, index) => {
                sort = () => dispatch(sortSwitch(option));
                /* if (option === 'Самый быстрый') { sort = () => dispatch(filterTicketsByCompany('S7 Airlines')); } */
                /* if (option === 'Самый оптимальный') { sort = () => dispatch(sortSwitch('Самый оптимальный')); } */
                return (
                    <Button
                        key={index}
                        children={option}
                        size={properties.size}
                        color={properties.color}
                        onClick={sort}
                    />
                );
            })}
        </div>
    );
};

export default ButtonGroup;