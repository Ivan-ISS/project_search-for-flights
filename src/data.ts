import getRandom from './utils/getRandomNumber';
import { ITicket } from './types/ticketsType';

// const airportNames = [
//     { name: 'SVO'},
//     { name: 'LED'},

// ];

// const tickets: ITicket[] = [];

let idCounter = 0;

const companyNames = [ 'Победа', 'Red Wings', 'S7 Airlines' ];
const minPrice: number = 2000;
const maxPrice: number = 80000;

const ticketGeneration = (): ITicket => {
    return (
        {
            id: idCounter,
            from: 'SVO',
            to: 'LED',
            company: companyNames[getRandom(0, companyNames.length - 1)],
            price: getRandom(minPrice, maxPrice),
            currency: 'RUB',
            time: { startTime: '4:30',  endTime: '6:30' },
            duration: 2,
            connectionAmount: getRandom(0, 3),
        }
    );
};

const getTickets = (numberOfTickets: number) => {
    const newTickets: ITicket[] = [];
    for (let i = 0; i < numberOfTickets; i++) {
        idCounter++;
        newTickets.push(ticketGeneration());
    }
    return newTickets;
};

export const fakeData = (numberOfTickets: number) => {
    return {
        tickets: getTickets(numberOfTickets)
    };
};

export const fetchUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData(6).tickets);
        }, 1000);
    });
};