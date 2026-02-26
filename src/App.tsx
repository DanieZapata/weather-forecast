import { useEffect } from "react";
import { useWeather } from "./hooks/useWeather";
import { SearchCity } from "./components/SearchCity";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Message } from "./components/Message";
import { getWeatherInfo } from "./utils/weatherUtils";

function App() {
  const { city, current, forecast, loading, error, searchCity } = useWeather();

  useEffect(() => {
    searchCity("La Paz");
  }, []);

  const weatherInfo = current && forecast.length > 0 ? getWeatherInfo(forecast[0].weathercode) : getWeatherInfo(0);

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${weatherInfo?.background})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-1 md:order-2 flex flex-col gap-4">
            <SearchCity onSearch={searchCity} />

            {loading && (
              <Message type="loading" message="Cargando datos del clima..." />
            )}

            {!loading && error && (
              <Message type="error" message="Ciudad no encontrada" />
            )}

            {!loading && !error && current && (
              <Message type="success" message="Ciudad encontrada" />
            )}
          </div>

          <div className="order-2 md:order-1">
            {current && forecast.length > 0 && (
              <CurrentWeather
                city={city}
                data={current}
                todayForecast={forecast[0]}
                weatherInfo={weatherInfo}
              />
            )}
          </div>

        </div>

        {forecast.length > 0 && (
          <div className="mt-10">
            <Forecast forecast={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;