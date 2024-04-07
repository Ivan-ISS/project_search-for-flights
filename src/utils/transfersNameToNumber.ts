export default function transfersNameToNumber(transfersName: string) {
    let transfersNumber = parseFloat(transfersName.substring(0, 1));
    if (isNaN(transfersNumber)) transfersNumber = 0;

    return transfersNumber;
}