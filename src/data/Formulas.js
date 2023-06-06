// Historical Average
export function historicalAverage(array) {
    if (array.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }

    const sum = array.reduce((acc, value) => acc + value, 0);
    const mean = sum / array.length;
    return mean;
}

// Shot Counter
export function shotCounter100(array) {
    const counter100 = array.length
    return counter100
}
export function shotCounter75(array) {
    const counter75 = array.length
    return counter75
}
export function shotCounter50(array) {
    const counter50 = array.length
    return counter50
}
export function shotCounter25(array) {
    const counter25 = array.length
    return counter25
}