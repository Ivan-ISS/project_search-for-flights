// import * as React from "react";
import styles from './ticketGroup.module.scss';
import { ITicket } from '../../../types/ticketsType';
import Ticket from '../Ticket/ticket';

export interface TicketGroupProps {
    ticketsData: ITicket[],
}

const TicketGroup = ({ ticketsData }: TicketGroupProps): JSX.Element => {

    return (
        <ul className={styles.listTicket}>
            {ticketsData.map((ticketData, index) => (
                <li>
                    <Ticket key={index} ticketData={ticketData} />
                </li>
            ))}
        </ul>
    );
};

export default TicketGroup;