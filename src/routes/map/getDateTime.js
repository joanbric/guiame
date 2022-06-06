function formatNumber(number){
    return number.toString().length > 1 ? number.toString() : '0' + number.toString();
}
export default function getDateTime(){
    const now = new Date();
    const hour = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());

    const year = now.getFullYear();
    const month = formatNumber(now.getMonth() + 1); // Month_index + 1. Eg.: 9 + 1 = 10 = Octuber
    const day = formatNumber(now.getDate());
    const time = `${hour}${minutes}`;
    const date = `${year}${month}${day}`;
    console.log({date, time})
    return {date, time};
}