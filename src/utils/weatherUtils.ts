import sunnyIcon from "../assets/weather/sunny.png";
import cloudyIcon from "../assets/weather/cloudy.png";
import rainyIcon from "../assets/weather/rainy.png";
import snowyIcon from "../assets/weather/snowy.png";
import stormIcon from "../assets/weather/storm.png";

import sunnyBg from "../assets/backgrounds/sunny-background.png";
import cloudyBg from "../assets/backgrounds/cloudy-background.png";
import rainyBg from "../assets/backgrounds/rainy-background.png";
import snowyBg from "../assets/backgrounds/snowy-background.png";
import stormBg from "../assets/backgrounds/storm-background.png";

export interface WeatherInfo {
  description: string;
  icon: string;
  background: string;
}

export function getWeatherInfo(weathercode: number): WeatherInfo {
  if (weathercode === 0) return { description: "Soleado", icon: sunnyIcon, background: sunnyBg };
  if (weathercode >= 1 && weathercode <= 3) return { description: "Nublado", icon: cloudyIcon, background: cloudyBg };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weathercode)) return { description: "Lluvia", icon: rainyIcon, background: rainyBg };
  if ([71, 73, 75, 77, 85, 86].includes(weathercode)) return { description: "Nieve", icon: snowyIcon, background: snowyBg };
  if ([95, 96, 99].includes(weathercode)) return { description: "Tormenta", icon: stormIcon, background: stormBg };

  return { description: "Soleado", icon: sunnyIcon, background: sunnyBg };
}
