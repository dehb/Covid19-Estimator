// // const calculateImpact = (number, data) => {
// const calculateImpact = (data) => {
//   const hosBed = data.totalHospitalBeds;
//   const incomPop = data.region.avgDailyIncomePopulation;
//   const incomUSD = data.region.avgDailyIncomeInUSD;
//   //  convert time to elapse
//   let days = 0;
//   if (data.periodType === 'days') {
//     days = data.timeToElapse;
//   } else if (data.periodType === 'weeks') {
//     days = data.timeToElapse * 7;
//   } else if (data.periodType === 'months') {
//     days = data.timeToElapse * 30;
//   }
//   const factor = Math.trunc(days / 3);
//   //  CHALLENGE 1
//   const currentlyInfected = data.reportedCases * number;
//   const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
//   //  CHALLENGE 2
//   const severeCasesByRequestedTime = Math.trunc((15 / 100) * infectionsByRequestedTime);
//   const hospitalBedsByRequestedTime = Math.trunc((0.35 * hosBed) - severeCasesByRequestedTime);
//   //  CHALLENGE 3
//   const casesForICUByRequestedTime = Math.floor(0.05 * infectionsByRequestedTime);
//   const casesForVentilatorsByRequestedTime = Math.floor(0.02 * infectionsByRequestedTime);
//   const dollarsInFlight = Math.floor((infectionsByRequestedTime * incomPop * incomUSD) / days);
//   return {
//     //  CHALLENGE 1
//     currentlyInfected,
//     infectionsByRequestedTime,
//     //  CHALLENGE 2
//     severeCasesByRequestedTime,
//     hospitalBedsByRequestedTime,
//     //  CHALLENGE 3
//     casesForICUByRequestedTime,
//     casesForVentilatorsByRequestedTime,
//     dollarsInFlight
//   };
// };

// const covid19ImpactEstimator = (data) => ({
//   data,
//   impact: calculateImpact(10, data),
//   severeImpact: calculateImpact(50, data)
// });
// export default covid19ImpactEstimator;

const calculateImpact = (number, data) => {
  // const impact = {};
  // const severeImpact = {};
  const hosBed = Math.floor(0.35 * data.totalHospitalBeds);
  // const incomPop = data.region.avgDailyIncomePopulation;
  // const incomUSD = data.region.avgDailyIncomeInUSD;
  let days;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    days = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    days = data.timeToElapse * 30;
  }

  // let days = 0;
  //   if (data.periodType === 'days') {
  //     days = data.timeToElapse;
  //   } else if (data.periodType === 'weeks') {
  //     days = data.timeToElapse * 7;
  //   } else if (data.periodType === 'months') {
  //     days = data.timeToElapse * 30;
  //   }
  // const days = data.timeToElapse;
  const factor = Math.trunc(days / 3);
  // impact.currentlyInfected = data.reportedCases * 10;
  // severeImpact.currentlyInfected = data.reportedCases * 50;
  const currentlyInfected = data.reportedCases * number;
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
  // impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** factor);
  // severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** factor);
  const severeCasesByRequestedTime = Math.floor((15 / 100) * infectionsByRequestedTime);
  // severeImpact.severeCasesByRequestedTime = (15 / 100) * severeImpact.infectionsByRequestedTime;

  // const impactCases = severeCasesByRequestedTime;
  // const severeCases = severeImpact.severeCasesByRequestedTime;
  const hospitalBedsByRequestedTime = hosBed - severeCasesByRequestedTime;
  // severeImpact.hospitalBedsByRequestedTime = Math.ceil(hosBed - severeCases);

  // const severeImpactInfection = severeImpact.infectionsByRequestedTime;
  // impact.casesForICUByRequestedTime = Math.floor(0.05 * impact.infectionsByRequestedTime);
  // severeImpact.casesForICUByRequestedTime = Math.floor(0.05 * severeImpactInfection);

  // impa.casesForVentilatorsByRequestedTime = Math.floor(0.02 * impact.infectionsByRequestedTime);
  // severeImpact.casesForVentilatorsByRequestedTime = Math.floor(0.02 * severeImpactInfection);
  // const impactInfection = impact.infectionsByRequestedTime;
  // impact.dollarsInFlight = Math.floor((impactInfection * incomPop * incomUSD) / days);
  // Impact.dollarsInFlight = Math.floor((severeImpactInfection * incomPop * incomUSD) / days);

  return {
    // data,
    // impact,
    // severeImpact
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};

// const calculateImpact = (number, data) => {
//   // const impact = {};
//   // const severeImpact = {};
//   // const hosBed = 0.35 * data.totalHospitalBeds;
//   // const incomPop = data.region.avgDailyIncomePopulation;
//   // const incomUSD = data.region.avgDailyIncomeInUSD;

//   // if (data.periodType === 'weeks') {
//   //   data.timeToElapse *= 7;
//   // } else if (data.periodType === 'months') {
//   //   data.timeToElapse *= 30;
//   // }
//   const days = data.timeToElapse;
//   const factor = Math.trunc(days / 3);
//   // impact.currentlyInfected = data.reportedCases * 10;
//   // severeImpact.currentlyInfected = data.reportedCases * 50;
//   const currentlyInfected = data.reportedCases * number;
//   const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
//   // impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** factor);
//   // severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** factor);
//   // impact.severeCasesByRequestedTime = (15 / 100) * impact.infectionsByRequestedTime;
//  severeImpact.severeCasesByRequestedTime = (15 / 100) * severeImpact.infectionsByRequestedTime;

//   // const impactCases = impact.severeCasesByRequestedTime;
//   // const severeCases = severeImpact.severeCasesByRequestedTime;
//   // impact.hospitalBedsByRequestedTime = Math.ceil(hosBed - impactCases);
//   // severeImpact.hospitalBedsByRequestedTime = Math.ceil(hosBed - severeCases);

//   // const severeImpactInfection = severeImpact.infectionsByRequestedTime;
//   // impact.casesForICUByRequestedTime = Math.floor(0.05 * impact.infectionsByRequestedTime);
//   // severeImpact.casesForICUByRequestedTime = Math.floor(0.05 * severeImpactInfection);

// impa.casesForVentilatorsByRequestedTime = Math.floor(0.02 * impact.infectionsByRequestedTime);
//   // severeImpact.casesForVentilatorsByRequestedTime = Math.floor(0.02 * severeImpactInfection);
//   // const impactInfection = impact.infectionsByRequestedTime;
//   // impact.dollarsInFlight = Math.floor((impactInfection * incomPop * incomUSD) / days);
//   // Impact.dollarsInFlight = Math.floor((severeImpactInfection * incomPop * incomUSD) / days);

//   return {
//     // data,
//     // impact,
//     // severeImpact
//     currentlyInfected,
//     infectionsByRequestedTime
//   };
// };


const covid19ImpactEstimator = (data) => ({
  data,
  impact: calculateImpact(10, data),
  severeImpact: calculateImpact(50, data)
});
export default covid19ImpactEstimator;
