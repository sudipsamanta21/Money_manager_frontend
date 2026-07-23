export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    // Convert number to string to handle decimals
    const numStr = num.toString();
    const parts = numStr.split(".");

    let integerPart = parts[0];
    let fractionalPart = parts[1];

    // Indian numbering system
    const lastThree = integerPart.substring(integerPart.length - 3);
    const otherNumbers = integerPart.substring(0, integerPart.length - 3);

    if (otherNumbers !== "") {
        const formattedOtherNumbers = otherNumbers.replace(
            /\B(?=(\d{2})+(?!\d))/g,
            ","
        );
        integerPart = formattedOtherNumbers + "," + lastThree;
    } else {
        integerPart = lastThree;
    }

    return fractionalPart
        ? `${integerPart}.${fractionalPart}`
        : integerPart;
};


import moment from "moment";

export const prepareIncomeLineChartData = (transactions) => {
    if (!transactions || transactions.length === 0) return [];

    const grouped = {};

    transactions.forEach((transaction) => {
        const date = moment(transaction.date).format("YYYY-MM-DD");

        grouped[date] = (grouped[date] || 0) + Number(transaction.amount);
    });

    return Object.entries(grouped)
        .sort((a, b) => new Date(a[0]) - new Date(b[0])) // Sort by date
        .map(([date, amount]) => ({
            date: moment(date).format("DD MMM"),
            amount,
        }));
};




export const prepareExpenseLineChartData = (transactions) => {
    if (!transactions || transactions.length === 0) return [];

    const grouped = {};

    transactions.forEach((transaction) => {
        const date = moment(transaction.date).format("YYYY-MM-DD");

        grouped[date] =
            (grouped[date] || 0) + Number(transaction.amount);
    });

    return Object.entries(grouped)
        .sort((a, b) => new Date(a[0]) - new Date(b[0]))
        .map(([date, amount]) => ({
            date: moment(date).format("DD MMM"),
            amount,
        }));
};
