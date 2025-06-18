export function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1)
};

export function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}