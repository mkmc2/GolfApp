import React, { useState } from "react";

export const SevenWoodData = () => {
    // State
    const [sevenWood100Data, setSevenWood100Data] = useState([]);
    const [sevenWood75Data, setSevenWood75Data] = useState([]);

    const [sevenWoodShotCounter100, setSevenWoodShotCounter100] = useState();
    const [sevenWoodShotCounter75, setSevenWoodShotCounter75] = useState();
    // Historical Average
    const [historicalAverageSevenWood100, setHistoricalAverageSevenWood100] = useState();
    const [historicalAverageSevenWood75, setHistoricalAverageSevenWood75] = useState();
    // Variance
    const [highVarianceSevenWood100, setHighVarianceSevenWood100] = useState();
    const [highVarianceSevenWood75, setHighVarianceSevenWood75] = useState();
    const [lowVarianceSevenWood100, setLowVarianceSevenWood100] = useState();
    const [lowVarianceSevenWood75, setLowVarianceSevenWood75] = useState();

    // Seven Wood Weighted Average

    // Seven Wood Historical Average
    const calculateHistoricalAverageSevenWood100 = () => {
        if (sevenWood100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenWood100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenWood100(Math.round(sum / sevenWood100Data.length));
        return historicalAverageSevenWood100;
    };
    const calculateHistoricalAverageSevenWood75 = () => {
        if (sevenWood75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenWood75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenWood75(Math.round(sum / sevenWood75Data.length));
        return historicalAverageSevenWood75;
    };

    // Seven Wood Total Shots
    const sevenWoodShotTotalCounter100 = () => {
        setSevenWoodShotCounter100(sevenWood100Data.length);
        return sevenWoodShotCounter100;
    };
    const sevenWoodShotTotalCounter75 = () => {
        setSevenWoodShotCounter75(sevenWood75Data.length);
        return sevenWoodShotCounter75;
    };

    // Seven Wood Variance

    const calculateHighVarianceSevenWood100 = () => {
        const historicalAverage = historicalAverageSevenWood100;
        const highestValue = Math.max(...sevenWood100Data);
        setHighVarianceSevenWood100(highestValue - historicalAverage);
        return highVarianceSevenWood100;
    };
    const calculateHighVarianceSevenWood75 = () => {
        const historicalAverage = historicalAverageSevenWood75;
        const highestValue = Math.max(...sevenWood75Data);
        setHighVarianceSevenWood75(highestValue - historicalAverage);
        return highVarianceSevenWood75;
    };
    const calculateLowVarianceSevenWood100 = () => {
        const historicalAverage = historicalAverageSevenWood100;
        const lowestValue = Math.min(...sevenWood100Data);
        setLowVarianceSevenWood100(lowestValue - historicalAverage);
        return lowVarianceSevenWood100;
    };
    const calculateLowVarianceSevenWood75 = () => {
        const historicalAverage = historicalAverageSevenWood75;
        const lowestValue = Math.min(...sevenWood75Data);
        setLowVarianceSevenWood75(lowestValue - historicalAverage);
        return lowVarianceSevenWood75;
    };

    return {
        sevenWood100Data,
        setSevenWood100Data,
        sevenWood75Data,
        setSevenWood75Data,
    };
};

export default SevenWoodData;
