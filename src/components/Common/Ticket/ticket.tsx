import styles from './ticket.module.scss';
import { ITicket } from '../../../types/ticketsType';
import convertToTime from '../../../utils/convertToTime';

interface TicketProps {
    ticketData: ITicket,
}

const Ticket = ({ ticketData }: TicketProps): JSX.Element => {
    return (
        <div className={styles.ticket}>
            <div className={styles.price}>
                <span className={styles.price}>
                    {`
                        ${ticketData.price.toString().substring(0, ticketData.price.toString().length - 3)} 
                        ${ticketData.price.toString().substring(ticketData.price.toString().length - 3)} Р
                    `}
                </span>
                <div className={styles.logo}>
                    <img src={`src/images/png/${ticketData.company.toLocaleLowerCase()}.png`} alt={ticketData.company} />
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.insert}>
                    <span className={styles.signature}>{ticketData.from} - {ticketData.to}</span>
                    <span className={styles.meaning}>{ticketData.time.startTime} - {ticketData.time.endTime}</span>
                </div>
                <div className={styles.insert}>
                    <span className={styles.signature}>В пути</span>
                    <span className={styles.meaning}>
                        {`
                            ${convertToTime(ticketData.duration).hours} ч 
                            ${convertToTime(ticketData.duration).minutes} мин
                        `}
                    </span>
                </div>
                <div className={styles.insert}>
                    <span className={styles.signature}>Пересадки</span>
                    <span className={styles.meaning}>
                        {ticketData.connectionAmount === 0 ? 'Без пересадок' : `${ticketData.connectionAmount} пересадк${ticketData.connectionAmount === 1 ? 'а' : 'и'} `}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;