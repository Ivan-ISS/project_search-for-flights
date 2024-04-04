import styles from './radio.module.scss';

export interface CheckBoxProps {
    name?: string,
    label: string,
    color: 'white' | 'purple',
}

const Radio = ({ label, name, color }: CheckBoxProps): JSX.Element => {

    return (
        <label className={styles.wrapRadio}>
            <input className={`${styles.radio} ${color === 'white' ? styles.radioWhite : styles.radioPurple}`} type="radio" name={name} />
            <div className={`${styles.text} ${color === 'white' ? styles.textWhite : styles.textPurple}`}>{label}</div>
        </label>
    );
};

export default Radio;