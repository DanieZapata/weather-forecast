import type { CurrentWeather, DailyForecast } from "../types/weather";
import type { WeatherInfo } from "../utils/weatherUtils";

interface Props {
  city: string;
  data: CurrentWeather;
  todayForecast: DailyForecast;
  weatherInfo: WeatherInfo;
}

export function CurrentWeather({ city, data, todayForecast, weatherInfo }: Props) {
  const date = new Date(todayForecast.date);
  const formattedDay = new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date);
  const formattedDate = new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(date);

  return (
    <div className="mt-4 py-4 w-full flex flex-col items-center md:items-start">

      <h2 className="uppercase text-5xl md:text-6xl font-thin text-white mb-4 text-center md:text-right">
        {city}
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

        <h1 className="text-6xl md:text-8xl font-extralight text-white tracking-tight leading-none">
          {data.temperature}
          <span className="text-4xl md:text-6xl align-top">°C</span>
        </h1>

        <div className="flex flex-col text-center md:text-left mt-2">
          <p className="uppercase text-lg md:text-xl font-thin text-white">
            {`${formattedDay} ${formattedDate}`}
          </p>

          <p className="uppercase text-lg md:text-xl font-thin text-white mt-1">
            {weatherInfo.description}
          </p>

          <p className="uppercase text-lg font-thin text-white mt-1">
            Viento: <span className="font-semibold">{data.windspeed} km/h</span>
          </p>
        </div>

      </div>

    </div>
  );
}