import { InputHTMLAttributes/* , useState */ } from 'react';
import './checkbox.module.scss';
import styles from './checkbox.module.scss';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    color: 'white' | 'purple',
    label: string,
    checked: boolean,
}

const CheckBox = ({ color, label, checked, ...props }: CheckBoxProps): JSX.Element => {

    return (
        <label className={styles.label}>
            <input {...props} className={styles.checkbox} type="checkbox" checked={checked} />
            <span className={`${styles.checkboxFake} ${color === 'white' ? styles.checkboxFakeWhite : styles.checkboxFakePurple}`}></span>
            <div className={`${styles.text} ${color === 'white' ? styles.textWhite : styles.textPurple}`}>
                {label}
            </div>
        </label>
    );
};

export default CheckBox;