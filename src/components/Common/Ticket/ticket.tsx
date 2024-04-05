import styles from './ticket.module.scss';
import { ITicket } from '../../../types/ticketsType';

interface TicketProps {
    ticketData: ITicket,
}

const Ticket = ({ ticketData }: TicketProps): JSX.Element => {
    return (
        <div className={styles.ticket}>
            <div className={styles.price}>
                <span className={styles.price}>{ticketData.price}</span>
                <div className={styles.logo}>
                    <img src={`src/images/png/${ticketData.company.toLocaleLowerCase()}.png`} alt={ticketData.company} />
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.insert}>
                    <span className={styles.signature}>{ticketData.from} - {ticketData.to}</span>
                    <span className={styles.time}>{ticketData.time.startTime} - {ticketData.time.endTime}</span>
                </div>
                <div className={styles.insert}>
                    <span className={styles.signature}>В пути</span>
                    <span>{`${ticketData.duration} ч ${ticketData.duration} мин`}</span>
                </div>
                <div className={styles.insert}>
                    <span className={styles.signature}>Пересадки</span>
                    <span className={styles.connectionAmount}>
                        {ticketData.connectionAmount === 0 ? 'Без пересадок' : `${ticketData.connectionAmount} пересадк${ticketData.connectionAmount === 1 ? 'а' : 'и'} `}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;