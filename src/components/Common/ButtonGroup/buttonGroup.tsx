import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../../redux/store';
import { sortSwitch } from '../../../redux/slices/ticketSlice';
import styles from './buttonGroup.module.scss';
import Button, { ButtonProps } from '../Button/button';

export interface ButtonGroupProps {
    options: string[],
    properties: ButtonProps,
}

const ButtonGroup = ({ options, properties }: ButtonGroupProps): JSX.Element => {
    const dispatch = useDispatch<RootDispatch>();
    const sortName = useSelector((state: RootState) => state.dataTickets.sorting);

    return (
        <div className={styles.buttonGroup}>
            {options.map((option, index) => {
                return (
                    <Button
                        key={index}
                        children={option}
                        size={properties.size}
                        color={properties.color}
                        isActive={sortName === option}
                        onClick={() => dispatch(sortSwitch(option))}
                    />
                );
            })}
        </div>
    );
};

export default ButtonGroup;