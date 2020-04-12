const calculateImpact = (number, data) => {
  const hospitalBed = data.totalHospitalBeds;
  const incomPop = data.region.avgDailyIncomePopulation;
  const incomUSD = data.region.avgDailyIncomeInUSD;
 
  if (data.periodType === 'weeks'){
    data.timeToElapse *= 7;
  }else if (data.periodType === 'months'){
    data.timeToElapse *= 30;
  }
  const days = data.timeToElapse;
  const factor = Math.trunc(days / 3);

  //  CHALLENGE 1
  const currentlyInfected = data.reportedCases * number;
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor((days / 3)));
  //  CHALLENGE 2
  const severeCasesByRequestedTime = Math.floor((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = severeCasesByRequestedTime - Math.floor(0.35 * hospitalBed);
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
