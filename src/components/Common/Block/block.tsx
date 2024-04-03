import { HTMLAttributes } from 'react';
import styles from './block.module.scss';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    children: JSX.Element
}

const Block = ({ title, children }: BlockProps): JSX.Element => {
    return (
        <div className={styles.block}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Block;