import styles from './header.module.scss';
import logo from '../../images/png/logo.png';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.imgLogo} src={logo} alt="logo" />
                </div>
                <h1 className={styles.title}>
                    Поиск авиабилетов
                </h1>
            </div>
        </header>
    );
};

export default Header;