import getRandom from './utils/getRandomNumber';
import { ITicket } from './types/ticketsType';
import convertToTime from './utils/convertToTime';

// const airportNames = [
//     { name: 'SVO'},
//     { name: 'LED'},

// ];

// const tickets: ITicket[] = [];

let idCounter = 0;

const companyNames = [ 'Pobeda', 'Red Wings', 'S7 Airlines' ];
const minPrice: number = 2000;
const maxPrice: number = 80000;

const ticketGeneration = (): ITicket => {
    const startTime = getRandom(0, 1440);
    let endTime = startTime + getRandom(0, 720);
    const duration = endTime - startTime;
    
    if (endTime > 1440) endTime = endTime - 1440;

    console.log(startTime);
    console.log(endTime);

    const { hours: startHours, minutes: startMinutes } = convertToTime(startTime);
    const { hours: endHours, minutes: endMinutes } = convertToTime(endTime);

    /* const startHours = Math.floor(startTime / 60);
    const startMinutes = (Math.floor(((startTime / 60) % 1) * Math.pow(10, 5))) * 60;

    const endHours = Math.floor(startTime / 60);
    const endMinutes = (Math.floor(((startTime / 60) % 1) * Math.pow(10, 5))) * 60; */

    return (
        {
            id: idCounter,
            from: 'SVO',
            to: 'LED',
            company: companyNames[getRandom(0, companyNames.length - 1)],
            price: getRandom(minPrice, maxPrice),
            currency: 'RUB',
            time: { startTime: `${startHours}:${startMinutes}`,  endTime: `${endHours}:${endMinutes}` },
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
            resolve(fakeData(3).tickets);
        }, 1000);
    });
};