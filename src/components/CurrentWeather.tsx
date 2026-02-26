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
    <div className="mt-4 py-4 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="uppercase text-6xl font-thin text-white">{city}</h2>
            <p className="uppercase text-2xl font-thin text-white">{`${formattedDay} ${formattedDate}`}</p>
            <p className="uppercase mt-2 font-thin text-2xl text-white">{weatherInfo.description}</p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-6 mt-2">
            <p className="text-lg font-thin text-white">
              Temperatura: <span className="font-semibold text-white">{data.temperature}°C</span>
            </p>
            <p className="text-lg font-thin text-white">
              Viento: <span className="font-semibold text-white">{data.windspeed} km/h</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}