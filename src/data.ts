import getRandom from './utils/getRandomNumber';
import { ITicket } from './types/ticketsType';
import convertToTime from './utils/convertToTime';
import { companyNames, numberOfTransfer } from './elementsData';

let idCounter = 0;

const minPrice: number = 2000;
const maxPrice: number = 80000;

const ticketGeneration = (): ITicket => {
    const startTime = getRandom(0, 1440);
    let endTime = startTime + getRandom(100, 720);
    const duration = endTime - startTime;

    if (endTime > 1440) endTime = endTime - 1440;

    const { hours: startHours, minutes: startMinutes } = convertToTime(startTime);
    const { hours: endHours, minutes: endMinutes } = convertToTime(endTime);
    
    return (
        {
            id: idCounter,
            from: 'SVO',
            to: 'LED',
            company: companyNames[getRandom(0, companyNames.length - 1)],
            price: getRandom(minPrice, maxPrice),
            currency: 'RUB',
            time: { startTime: `${startHours}:${startMinutes}`,  endTime: `${endHours}:${endMinutes}` },
            duration: duration,
            connectionAmount: getRandom(0, numberOfTransfer.length - 1),
        }
    );
};

const fakeData = (numberOfTickets: number) => {
    const newTickets: ITicket[] = [];
    for (let i = 0; i < numberOfTickets; i++) {
        idCounter++;
        newTickets.push(ticketGeneration());
    }
    return { tickets: newTickets };
};

export const fetchTickets = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData(3).tickets);
        }, 1000);
    });
};