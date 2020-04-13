const calculateImpact = (number, data) => {
// const calculateImpact = (data) => {
  const hosBed = data.totalHospitalBeds;
  const incomPop = data.region.avgDailyIncomePopulation;
  const incomUSD = data.region.avgDailyIncomeInUSD;
  //  convert time to elapse
  let days = 0;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    days = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    days = data.timeToElapse * 30;
  }
  const factor = Math.trunc(days / 3);
  //  CHALLENGE 1
  const currentlyInfected = data.reportedCases * number;
  //    const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
  //  CHALLENGE 2
  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  const hospitalBedsByRequestedTime = severeCasesByRequestedTime - Math.floor(0.35 * hosBed);
  //  CHALLENGE 3
  const casesForICUByRequestedTime = Math.floor((5 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.floor((2 / 100) * infectionsByRequestedTime);
  const dollarsInFlight = Math.floor(infectionsByRequestedTime * incomPop * incomUSD * days);
  return {
    //  CHALLENGE 1
    currentlyInfected,
    infectionsByRequestedTime,
    //  CHALLENGE 2
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    //  CHALLENGE 3
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

const covid19ImpactEstimator = (data) => ({
  data,
  impact: calculateImpact(10, data),
  severeImpact: calculateImpact(50, data)
});
export default covid19ImpactEstimator;
