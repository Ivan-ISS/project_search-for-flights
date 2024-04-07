import { HTMLAttributes } from 'react';
import styles from './block.module.scss';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    color: string,
    padding?: string,
    children: JSX.Element
}

const Block = ({ title, color = 'white', padding = 'paddingOn', children, ...props }: BlockProps): JSX.Element => {
    return (
        <div {...props} className={`${styles.block} ${styles[color]}`}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={`${styles.body} ${styles[padding]}`}>
                {children}
            </div>
        </div>
    );
};

export default Block;