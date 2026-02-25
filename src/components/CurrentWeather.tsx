import type { CurrentWeather } from "../types/weather";

interface Props {
  city: string;
  data: CurrentWeather;
}

export function CurrentWeather({ city, data }: Props) {
  return (
    <div className="mt-4 grid p-2 mx-auto">
      <h2 className="uppercase text-xl font-bold">{city}</h2>
      <p>Temperatura:{data.temperature} °C</p>
      <p>Viento: {data.windspeed} km/h</p>
      <p>Código clima: {data.weathercode}</p>
    </div>
  );
}