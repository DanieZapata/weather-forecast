import { useState, useEffect } from "react";
import { useWeather } from "./hooks/useWeather";
import { SearchCity } from "./components/SearchCity";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Message } from "./components/Message";
import { getWeatherInfo } from "./utils/weatherUtils";

function App() {
  const { city, current, forecast, loading, error, searchCity } = useWeather();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (current) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const bgImage = current ? getWeatherInfo(current.weathercode).background : "null";

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SearchCity onSearch={searchCity} />

      {loading && <Message message="Cargando datos del clima..." type="loading" />}
      {error && <Message message={error} type="error" />}
      {showSuccess && !loading && !error && (
        <Message message={`Clima de ${city} cargado correctamente`} type="success" />
      )}

      {current && forecast.length > 0 && (
        <CurrentWeather
          city={city}
          data={current}
          todayForecast={forecast[0]}
        />
      )}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;