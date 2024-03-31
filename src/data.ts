import getRandom from './utils/getRandomNumber';

export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: number;
    connectionAmount: number | null;
}

// const airportNames = [
//     { name: 'SVO'},
//     { name: 'LED'},

// ];

const tickets: Ticket[] = [];

const companyNames: string[] = [ 'Победа', 'Red Wings', 'S7 Airlines' ];
const minPrice: number = 2000;
const maxPrice: number = 80000;

const ticketGeneration = (): Ticket => {
    return (
        {
            id: tickets.length + 1,
            from: 'SVO',
            to: 'LED',
            company: companyNames[getRandom(0, companyNames.length)],
            price: getRandom(minPrice, maxPrice),
            currency: 'RUB',
            time: { startTime: '4:30',  endTime: '6:30'},
            duration: 2,
            connectionAmount: getRandom(0, 3),
        }
    );
};

const getTickets = (numberOfTickets: number) => {
    for (let i =0; i < numberOfTickets; i++) { 
        tickets.push(ticketGeneration());
    }
    return tickets;
};

export const fakeDataTickets = {
    tickets: getTickets(3)
};

// interface IUsers {
//     id: number;
//     name: string
// }

// interface IFakeData {
//     [key: string]: IUsers[]
// }

// const fakeData: IFakeData = {
//     users: [
//       { id: 1, name: 'User 1' },
//       { id: 2, name: 'User 2' },
//       { id: 3, name: 'User 3' },
//       { id: 4, name: 'User 4' },
//       { id: 5, name: 'User 5' },
//       { id: 6, name: 'User 6' },
//     ],
// };
  
export const fetchUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(fakeDataTickets.tickets);
        }, 1000);
    });
};