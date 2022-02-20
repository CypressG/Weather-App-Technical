const dataExample = {
  time: "2022-02-20T13:13Z",
  symbol: "d400",
  symbolPhrase: "overcast",
  temperature: 6,
  feelsLikeTemp: 6,
  relHumidity: 64,
  dewPoint: 0,
  windSpeed: 1,
  windDir: 190,
  windDirString: "S",
  windGust: 7,
  precipProb: 9,
  precipRate: 0,
  cloudiness: 97,
  thunderProb: 0,
  uvIndex: 1,
  pressure: 1021.19,
  visibility: 20000,
};
const entriesExampleArr = [
  ["time", "Time"],
  ["relHumidity", "Humidity"],
  ["visibility", "Visibility"],
];

const getSpecificEntries = (dataset, entriesArr) => {
  const data = [];
  entriesArr.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(dataset, item[0]))
      data.push({
        id: item[0],
        value: dataset[`${item[0]}`],
        name: item[1],
        units: item[2],
      });
  });
  return data;
};

export default getSpecificEntries;

getSpecificEntries(dataExample, entriesExampleArr);
