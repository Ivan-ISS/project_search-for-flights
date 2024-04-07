import { HTMLAttributes, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './dropdownMenu.module.scss';
import arrow from '../../images/png/arrow.png';

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
    color: string
}

const DropdownMenu = ({ children, color = 'purple', ...props }: DropdownMenuProps): JSX.Element => {
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
    const filteredCompanies = useSelector((state: RootState) => state.dataTickets.filteredCompanies);
    const filteredTransfers = useSelector((state: RootState) => state.dataTickets.filteredTransfers);

    return (
        <div {...props} className={`${styles.dropdownMenu} ${styles[color]}`}>
            <div className={styles.menuPanel}>
                <div>
                    <span className={styles.selectedAirlines}>
                        { !filteredCompanies.length ? 'Любая авиакомпания, ' : filteredCompanies.map((company) => (' ' + company)) + ', ' }
                    </span>
                    <span className={styles.selectedTransfers}>
                        { !filteredTransfers.length ? ' любое кол-во пересадок' : 'пересадок:' + filteredTransfers.map((transfers) => (' ' + transfers)) }
                    </span>
                </div>
                <button className={styles.btnOpen} onClick={() => setSettingsOpen(v => !v)}>
                    Открыть настройки
                    <img src={arrow} className={settingsOpen ? styles.arrow : ''} alt="arrow" />
                </button>
            </div>
            <div className={styles.menuSettings}>
            {
                settingsOpen
                ? children
                : null
            }
            </div>
        </div>
    );
};

export default DropdownMenu;