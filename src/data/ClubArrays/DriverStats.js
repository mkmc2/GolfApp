import React, { useState } from "react";
import { historicalAverage } from '../../data/Formulas'

export const DriverData = () => {

    // State
    const [driver100Data, setDriver100Data] = useState([]);
    const [driver75Data, setDriver75Data] = useState([]);

    const [driverShotCounter100, setDriverShotCounter100,] = useState()
    const [driverShotCounter75, setDriverShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageDriver100, setHistoricalAverageDriver100] = useState();
    const [historicalAverageDriver75, setHistoricalAverageDriver75] = useState();
    // Variance
    const [highVarianceDriver100, setHighVarianceDriver100] = useState();
    const [highVarianceDriver75, setHighVarianceDriver75] = useState();
    const [lowVarianceDriver100, setLowVarianceDriver100] = useState();
    const [lowVarianceDriver75, setLowVarianceDriver75] = useState();

    // Driver Weighted Average

    // Driver Historical Average
    const calculateHistoricalAverageDriver100 = () => {
        if (driver100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = driver100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageDriver100(Math.round(sum / array.length));
        return historicalAverageDriver100;
    };
    const calculateHistoricalAverageDriver75 = () => {
        if (driver75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = driver75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageDriver75(Math.round(sum / array.length));
        return historicalAverageDriver75;
    };

    // Driver Total Shots
    const driverShotTotalCounter100 = () => {
        setDriverShotCounter100(driver100Data.length)
        return driverShotCounter100
    };
    const driverShotTotalCounter75 = () => {
        setDriverShotCounter75(driver75Data.length)
        return driverShotCounter75
    };

    // Driver Variance

    const calculateHighVarianceDriver100 = () => {
        const historicalAverage = historicalAverageDriver100;
        const highestValue = Math.max(...driver100Data);
        setHighVarianceDriver100(highestValue - historicalAverage);
        return highVarianceDriver100;
    }
    const calculateHighVarianceDriver75 = () => {
        const historicalAverage = historicalAverageDriver75;
        const highestValue = Math.max(...driver75Data);
        setHighVarianceDriver75(highestValue - historicalAverage);
        return highVarianceDriver75;
    }
    const calculateLowVarianceDriver100 = () => {
        const historicalAverage = historicalAverageDriver100;
        const lowestValue = Math.low(...driver100Data);
        setLowVarianceDriver100(lowestValue - historicalAverage);
        return lowVarianceDriver100;
    }
    const calculateLowVarianceDriver75 = () => {
        const historicalAverage = historicalAverageDriver75;
        const lowestValue = Math.low(...driver75Data);
        setLowVarianceDriver75(lowestValue - historicalAverage);
        return lowVarianceDriver75;
    }

    return {
        driver100Data,
        setDriver100Data,
        driver75Data,
        setDriver75Data,
        // Shot Totals
        driverShotCounter100,
        setDriverShotCounter100,
        driverShotTotalCounter100,
        driverShotCounter75,
        // Historical Value
        calculateHistoricalAverageDriver100,
    };
};

export default DriverData;