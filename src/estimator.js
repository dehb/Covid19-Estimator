const covid19ImpactEstimator = (data) => {
    coon
    return {
        data,
        impact: calculateImpact(10, inputData),
        severeImpact: calculateImpact(50, inputData),
    }
};

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