const calculateImpact = (number, data) => {
// const calculateImpact = (data) => {
  //    const hosBed = data.totalHospitalBeds;
  //    const incomPop = data.region.avgDailyIncomePopulation;
  //    const incomUSD = data.region.avgDailyIncomeInUSD;
  //    convert time to elapse
  if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  }
  const time = data.timeToElapse;
  const factor = Math.trunc(timElapse / 3);
  //  CHALLENGE 1
  const currentlyInfected = data.reportedCases * number;
  //   const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
  //  CHALLENGE 2
  //    const severeCasesByRequestedTime = Math.floor((15 / 100) * infectionsByRequestedTime);
  //    const hospitalBedsByRequestedTime = severeCasesByRequestedTime - Math.floor(0.35 * hosBed);
  //  CHALLENGE 3
  //    const casesForICUByRequestedTime = Math.floor((5 / 100) * infectionsByRequestedTime);
  //    const casesForVentilatorsByRequestedTime = Math.floor((2 / 100) * infectionsByRequestedTim);
  //    const dollarsInFlight = Math.floor(infectionsByRequestedTime * incomPop * incomUSD * time);
  return {
    //  CHALLENGE 1
    currentlyInfected,
    infectionsByRequestedTime
    //  CHALLENGE 2
    //  severeCasesByRequestedTime,
    //  hospitalBedsByRequestedTime,
    //  CHALLENGE 3
    // casesForICUByRequestedTime,
    //  casesForVentilatorsByRequestedTime,
    //  dollarsInFlight
  };
};

const covid19ImpactEstimator = (data) => ({
  data,
  impact: calculateImpact(10, data),
  severeImpact: calculateImpact(50, data)
  //   impact: calculateImpact(data),
  //   severeImpact: calculateImpact(data)
});
export default covid19ImpactEstimator;
