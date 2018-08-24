const ora = require("ora");

const getLocation = require("../utils/location");
const getWeather = require("../utils/weather");

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Forecast for ${location}:`);
    weather.forecast.forEach(item =>
      console.log(
        `\t${item.date} - Low: ${((item.low - 32) / 1.8).toFixed(
          0
        )}°C | High: ${((item.high - 32) / 1.8).toFixed(0)}°C | ${item.text}`
      )
    );
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
