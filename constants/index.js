export const apiKey = 'Your API Key';

export const weatherImages = {
  "partly cloudy": require("../assets/images/partlycloudy.png"),
  "moderate rain": require("../assets/images/moderaterain.png"),
  "patchy rain nearby": require("../assets/images/moderaterain.png"),
  "sunny": require("../assets/images/sun.png"),
  "clear": require("../assets/images/sun.png"),
  "overcast": require("../assets/images/cloud.png"),
  "mist": require("../assets/images/moderaterain.png"),
  "cloudy": require("../assets/images/cloud.png"),
  "patchy light drizzle": require("../assets/images/partlycloudy.png"),
  "light rain shower": require("../assets/images/moderaterain.png"),
  "moderate rain at times": require("../assets/images/moderaterain.png"),
  "heavy rain": require("../assets/images/heavyrain.png"),
  "heavy rain at times": require("../assets/images/heavyrain.png"),
  "moderate or heavy freezing rain": require("../assets/images/heavyrain.png"),
  "moderate or heavy rain shower": require("../assets/images/heavyrain.png"),
  "moderate or heavy rain with thunder": require("../assets/images/heavyrain.png"),
  "other": require("../assets/images/moderaterain.png"),
};

export const getWeatherImage = (conditionText) => {
  if (!conditionText) return weatherImages["other"];
  const key = conditionText.toLowerCase().trim();
  return weatherImages[key] || weatherImages["other"];
};
