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
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
  //  CHALLENGE 2
  const severeCasesByRequestedTime = Math.trunc((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = Math.trunc((0.35 * hosBed) - severeCasesByRequestedTime);
  //  CHALLENGE 3
  const casesForICUByRequestedTime = Math.ceil(0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.ceil(0.02 * infectionsByRequestedTime);
  const dollarsInFlight = Math.trunc(infectionsByRequestedTime * incomPop * incomUSD * days);
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
