import { useState, useEffect } from "react";
import { getCityCoordinates, getWeather } from "../services/weatherAPI";
import type { CurrentWeather, DailyForecast } from "../types/weather";

export function useWeather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<DailyForecast[]>([]);

  const searchCity = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);

      const geo = await getCityCoordinates(cityName);
      const data = await getWeather(geo.latitude, geo.longitude);

      setCity(geo.name);
      localStorage.setItem("lastCity", geo.name);

      setCurrent({
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode,
      });

      const dailyForecast: DailyForecast[] = data.daily.time
        .map((date: string, index: number) => ({
          date,
          tempMax: data.daily.temperature_2m_max[index],
          tempMin: data.daily.temperature_2m_min[index],
          weathercode: data.daily.weathercode[index],
        }))
        .slice(0, 7);

      setForecast(dailyForecast);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("UNKNOWN_ERROR");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity") || "La Paz";
    searchCity(savedCity);
  }, []);

  return { city, current, forecast, loading, error, searchCity };
}