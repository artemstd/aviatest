import { TCurrency } from "./types";

export const currencySign = (currency: TCurrency): string => {
    switch(currency) {
        case "rub":
            return "Р";
        case "usd":
            return "$";
        default:
            return "";
    }
};

export const numberFormat = (number: number, decimals: number = 0, decPoint: string = '.', thousandsSep: string = ','): string => {
    if (!number) {
        number = 0;
    }

    if (decimals < 0) {
        decimals = 0;
    }

    const [ int, dec ] = number.toFixed(decimals).split(".");

    return int.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, thousandsSep) + (dec ? (decPoint + dec) : "");
}

export const plural = (number: number, one: string, two: string, five: string): string => {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
}

export const getImageUrlForAviaCode = (code: string): string => ( process.env.REACT_APP_IMAGES_URL || "" ).replace("%s", code);