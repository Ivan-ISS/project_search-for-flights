export interface ITicketTime {
    startTime: string;
    endTime: string;
}

export interface ITicket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: ITicketTime;
    duration: number;
    connectionAmount: number | null;
}