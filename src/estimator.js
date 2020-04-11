
const calculateImpact = (number, data) => {
    let currentlyInfected = data.reportedCases * number;
    let infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor((data.timeToElapse / 3)));
    let severeCasesByRequestedTime = Math.floor((15/100) * infectionsByRequestedTime);
    let hospitalBedsByRequestedTime = severeCasesByRequestedTime - Math.floor((35/100) * data.totalHospitalBeds);
    let casesForICUByRequestedTime = Math.floor((5/100) * infectionsByRequestedTime);
    let casesForVentilatorsByRequestedTime =Math.floor( (2/100) * infectionsByRequestedTime);
    let dollarsInFlight = infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD * data.timeToElapse;
    return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCasesByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarsInFlight
    }
};

const covid19ImpactEstimator = (data) => {
    return {
        data,
        impact: calculateImpact(10, inputData),
        severeImpact: calculateImpact(50, inputData),
    }
};

covid19ImpactEstimator(inputData);
export default covid19ImpactEstimator;

const inputData = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 27,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};