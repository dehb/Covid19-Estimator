const calculateImpact = (number, data) => {

  var hospitalBed = data.totalHospitalBeds;
  var incomePop = data.region.avgDailyIncomePopulation ;
  var incomeUSD = data.region.avgDailyIncomeInUSD;
  var timeElapse = data.timeToElapse
  //  CHALLENGE 1
  const currentlyInfected = data.reportedCases * number;
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor((data.timeToElapse / 3)));
  //  CHALLENGE 2
  const severeCasesByRequestedTime = Math.floor((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = severeCasesByRequestedTime - Math.floor(0.35 * hospitalBed);
  //  CHALLENGE 3
  const casesForICUByRequestedTime = Math.floor((5 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.floor((2 / 100) * infectionsByRequestedTime);
  const dollarsInFlight = Math.floor(infectionsByRequestedTime * incomePop * incomeUSD * timeElapse);
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

const inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 27,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  return {
    data,
    impact: calculateImpact(10, inputData),
    severeImpact: calculateImpact(50, inputData)
  };
};

//  covid19ImpactEstimator(inputData);
export default covid19ImpactEstimator;
