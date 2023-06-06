import React, { useState } from "react";

export const FourIronData = () => {

    // State
    const [fourIron100Data, setFourIron100Data] = useState([]);
    const [fourIron75Data, setFourIron75Data] = useState([]);
    const [fourIron50Data, setFourIron50Data] = useState([]);
    const [fourIron25Data, setFourIron25Data] = useState([]);

    const [fourIronShotCounter100, setFourIronShotCounter100,] = useState()
    const [fourIronShotCounter75, setFourIronShotCounter75,] = useState()
    const [fourIronShotCounter50, setFourIronShotCounter50,] = useState()
    const [fourIronShotCounter25, setFourIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFourIron100, setHistoricalAverageFourIron100] = useState();
    const [historicalAverageFourIron75, setHistoricalAverageFourIron75] = useState();
    const [historicalAverageFourIron50, setHistoricalAverageFourIron50] = useState();
    const [historicalAverageFourIron25, setHistoricalAverageFourIron25] = useState();
    // Variance
    const [highVarianceFourIron100, setHighVarianceFourIron100] = useState();
    const [highVarianceFourIron75, setHighVarianceFourIron75] = useState();
    const [lowVarianceFourIron100, setLowVarianceFourIron100] = useState();
    const [lowVarianceFourIron75, setLowVarianceFourIron75] = useState();

    // Four Iron Weighted Average

    // Four Iron Historical Average
    const calculateHistoricalAverageFourIron100 = () => {
        if (fourIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourIron100(Math.round(sum / fourIron100Data.length));
        return historicalAverageFourIron100;
    };
    const calculateHistoricalAverageFourIron75 = () => {
        if (fourIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourIron75(Math.round(sum / fourIron75Data.length));
        return historicalAverageFourIron75;
    };
    const calculateHistoricalAverageFourIron50 = () => {
        if (fourIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourIron50(Math.round(sum / fourIron50Data.length));
        return historicalAverageFourIron50;
    };
    const calculateHistoricalAverageFourIron25 = () => {
        if (fourIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourIron25(Math.round(sum / fourIron25Data.length));
        return historicalAverageFourIron25;
    };

    // Four Iron Total Shots
    const fourIronShotTotalCounter100 = () => {
        setFourIronShotCounter100(fourIron100Data.length)
        return fourIronShotCounter100
    };
    const fourIronShotTotalCounter75 = () => {
        setFourIronShotCounter75(fourIron75Data.length)
        return fourIronShotCounter75
    };
    const fourIronShotTotalCounter50 = () => {
        setFourIronShotCounter50(fourIron50Data.length)
        return fourIronShotCounter50
    };
    const fourIronShotTotalCounter25 = () => {
        setFourIronShotCounter25(fourIron25Data.length)
        return fourIronShotCounter25
    };

    // Four Iron Variance

    const calculateHighVarianceFourIron100 = () => {
        const historicalAverage = historicalAverageFourIron100;
        const highestValue = Math.max(...fourIron100Data);
        setHighVarianceFourIron100(highestValue - historicalAverage);
        return highVarianceFourIron100;
    }
    const calculateHighVarianceFourIron75 = () => {
        const historicalAverage = historicalAverageFourIron75;
        const highestValue = Math.max(...fourIron75Data);
        setHighVarianceFourIron75(highestValue - historicalAverage);
        return highVarianceFourIron75;
    }
    const calculateLowVarianceFourIron100 = () => {
        const historicalAverage = historicalAverageFourIron100;
        const lowestValue = Math.min(...fourIron100Data);
        setLowVarianceFourIron100(lowestValue - historicalAverage);
        return lowVarianceFourIron100;
    }
    const calculateLowVarianceFourIron75 = () => {
        const historicalAverage = historicalAverageFourIron75;
        const lowestValue = Math.min(...fourIron75Data);
        setLowVarianceFourIron75(lowestValue - historicalAverage);
        return lowVarianceFourIron75;
    }

    return {
        fourIron100Data,
        setFourIron100Data,
        fourIron75Data,
        setFourIron75Data,
        // Shot Totals
        fourIronShotCounter100,
        setFourIronShotCounter100,
        fourIronShotTotalCounter100,
        fourIronShotCounter75,
        // Historical Value
        calculateHistoricalAverageFourIron100,
        calculateHistoricalAverageFourIron75,
        // Variance
        calculateHighVarianceFourIron100,
        calculateHighVarianceFourIron75,
        calculateLowVarianceFourIron100,
        calculateLowVarianceFourIron75,
    };
};

export default FourIronData;
