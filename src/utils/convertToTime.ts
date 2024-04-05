export interface IConvertToHours {
    hours: string;
    minutes: string;
}

export default function convertToTime(meaning: number): IConvertToHours {

    const hours = Math.floor(meaning / 60);
    const minutes = Math.floor(((meaning / 60) % 1) * 60);

    let strHours = hours.toString();
    let strMinutes = minutes.toString();

    if (hours < 10) strHours = '0' + strHours;
    if (minutes < 10) strMinutes = '0' + strMinutes;

    return {
        hours: strHours, 
        minutes: strMinutes
    };
}

