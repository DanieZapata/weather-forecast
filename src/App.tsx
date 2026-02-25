import { useWeather } from "./hooks/useWeather";
import { SearchCity } from "./components/SearchCity";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Message } from "./components/Message";

function App() {
  const { city, current, forecast, loading, error, searchCity } = useWeather();

  return (
    <div className="p-8 mx-auto">
      <SearchCity onSearch={searchCity} />
      {loading && <Message message="Cargando datos del clima..." type="loading" />}
      {error && <Message message={error} type="error" />}
      {current && !loading && !error && (
        <Message message={`Clima de ${city} cargado correctamente`} type="success" />
      )}

      {current && <CurrentWeather city={city} data={current} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;