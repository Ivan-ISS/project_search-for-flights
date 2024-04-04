import { useState } from 'react';
import './checkbox.module.scss';
import styles from './checkbox.module.scss';

export interface CheckBoxProps {
    color: 'white' | 'purple',
    label: string,
    checked: boolean,
    onChange: (checked: boolean) => void,
}

const CheckBox = ({ color, label, checked, onChange }: CheckBoxProps): JSX.Element => {
    const [localChecked, setLocalChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalChecked(event.currentTarget.checked);
        onChange(event.currentTarget.checked);
    };

    return (
        <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" checked={localChecked} onChange={handleChange} />
            <span className={`${styles.checkboxFake} ${color === 'white' ? styles.checkboxFakeWhite : styles.checkboxFakePurple}`}></span>
            <div className={`${styles.text} ${color === 'white' ? styles.textWhite : styles.textPurple}`}>
                {label}
            </div>
        </label>
    );
};

export default CheckBox;