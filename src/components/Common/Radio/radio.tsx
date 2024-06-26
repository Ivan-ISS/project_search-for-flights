import { InputHTMLAttributes } from 'react';
import styles from './radio.module.scss';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string,
    label: string,
    color: 'white' | 'purple',
    checked: boolean,
}

const Radio = ({ label, name, color, checked, ...props }: CheckBoxProps): JSX.Element => {

    return (
        <label className={styles.wrapRadio}>
            <input {...props} className={`${styles.radio} ${color === 'white' ? styles.radioWhite : styles.radioPurple}`} checked={checked} type="radio" name={name} />
            <div className={`${styles.text} ${color === 'white' ? styles.textWhite : styles.textPurple}`}>{label}</div>
        </label>
    );
};

export default Radio;