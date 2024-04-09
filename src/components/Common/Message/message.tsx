import styles from './message.module.scss';

const Message = () => {

    return (
        <div className={styles.message}>
            Билеты с заданными фильтрами не найдены.<br/>
            Для дополнительного поиска нажмите:<br/>
            "Загрузить еще билеты"
            <div className={styles.arrow}>&#8811;</div>
        </div>
    );
};

export default Message;