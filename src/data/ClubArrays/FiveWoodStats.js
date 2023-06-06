import React, { useState } from "react";

export const FiveWoodData = () => {
    // State
    const [fiveWood100Data, setFiveWood100Data] = useState([]);
    const [fiveWood75Data, setFiveWood75Data] = useState([]);

    const [fiveWoodShotCounter100, setFiveWoodShotCounter100] = useState();
    const [fiveWoodShotCounter75, setFiveWoodShotCounter75] = useState();
    // Historical Average
    const [historicalAverageFiveWood100, setHistoricalAverageFiveWood100] = useState();
    const [historicalAverageFiveWood75, setHistoricalAverageFiveWood75] = useState();
    // Variance
    const [highVarianceFiveWood100, setHighVarianceFiveWood100] = useState();
    const [highVarianceFiveWood75, setHighVarianceFiveWood75] = useState();
    const [lowVarianceFiveWood100, setLowVarianceFiveWood100] = useState();
    const [lowVarianceFiveWood75, setLowVarianceFiveWood75] = useState();

    // Five Wood Weighted Average

    // Five Wood Historical Average
    const calculateHistoricalAverageFiveWood100 = () => {
        if (fiveWood100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveWood100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveWood100(Math.round(sum / fiveWood100Data.length));
        return historicalAverageFiveWood100;
    };
    const calculateHistoricalAverageFiveWood75 = () => {
        if (fiveWood75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveWood75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveWood75(Math.round(sum / fiveWood75Data.length));
        return historicalAverageFiveWood75;
    };

    // Five Wood Total Shots
    const fiveWoodShotTotalCounter100 = () => {
        setFiveWoodShotCounter100(fiveWood100Data.length);
        return fiveWoodShotCounter100;
    };
    const fiveWoodShotTotalCounter75 = () => {
        setFiveWoodShotCounter75(fiveWood75Data.length);
        return fiveWoodShotCounter75;
    };

    // Five Wood Variance

    const calculateHighVarianceFiveWood100 = () => {
        const historicalAverage = historicalAverageFiveWood100;
        const highestValue = Math.max(...fiveWood100Data);
        setHighVarianceFiveWood100(highestValue - historicalAverage);
        return highVarianceFiveWood100;
    };
    const calculateHighVarianceFiveWood75 = () => {
        const historicalAverage = historicalAverageFiveWood75;
        const highestValue = Math.max(...fiveWood75Data);
        setHighVarianceFiveWood75(highestValue - historicalAverage);
        return highVarianceFiveWood75;
    };
    const calculateLowVarianceFiveWood100 = () => {
        const historicalAverage = historicalAverageFiveWood100;
        const lowestValue = Math.min(...fiveWood100Data);
        setLowVarianceFiveWood100(lowestValue - historicalAverage);
        return lowVarianceFiveWood100;
    };
    const calculateLowVarianceFiveWood75 = () => {
        const historicalAverage = historicalAverageFiveWood75;
        const lowestValue = Math.min(...fiveWood75Data);
        setLowVarianceFiveWood75(lowestValue - historicalAverage);
        return lowVarianceFiveWood75;
    };

    return {
        fiveWood100Data,
        setFiveWood100Data,
        fiveWood75Data,
        setFiveWood75Data,
    };
};

export default FiveWoodData;