# 🌤️ Weather Forecast App

Aplicación web para consultar el clima actual y pronóstico de 7 días de cualquier ciudad.
Incluye manejo de errores claros y persistencia de la última ciudad buscada para mejorar la experiencia del usuario.

## Requisitos

Node.js ≥ 18

npm ≥ 9 o yarn ≥ 1.22

Conexión a internet para acceder a la API de Open-Meteo


## Instalación 

```bash
# Clonar el repositorio
git clone https://github.com/DanieZapata/weather-forecast.git
cd weather-forecast-app

# Instalar dependencias
npm install
# o
yarn install
```
## Ejecución

```bash
# Ejecutar la aplicación en modo desarrollo
npm run dev
# o
yarn dev
```

La app estará disponible en http://localhost:5173.

## Despliegue

La aplicación está publicada en Vercel y puedes acceder a ella desde el siguiente enlace:
https://weather-forecast-flame-tau.vercel.app/

## Uso

Escribe el nombre de la ciudad en el buscador y al presionar en el botón "Buscar" la app mostrará:
        
- Ciudad
        
- Temperatura
        
- Pronóstico del día
        
- Viento

Mientras atiende cualquier solicitud muestra mensajes automáticos como:
        
- Cargando datos del clima...

- Ciudad encontrada
        
- Ciudad no encontrada 
        
- Problemas de red 

Tambien la última ciudad buscada se guarda automáticamente y se carga al abrir la app nuevamente.

## Flujo de Aplicación

### Componente App.tsx

Llama a useWeather y gestiona los componentes: SearchCity, CurrentWeather, Forecast, Message.

### Hook useWeather

Función searchCity(cityName):
        
- Consulta coordenadas con getCityCoordinates.
        
- Consulta clima con getWeather.
        
- Guarda la última ciudad en localStorage.
        
- Actualiza estados: city, current, forecast, loading y error.

useEffect carga automáticamente la última ciudad desde localStorage al iniciar. Si no hay ciudad guardada, se puede establecer una ciudad por defecto en este caso es **La Paz** para mostrar datos iniciales y fondo visual en la UI.

### Componentes de UI

CurrentWeather: muestra clima actual.

Forecast: muestra pronóstico de 7 días.

Message: muestra mensajes de carga, éxito o error.

### Manejo de errores

CITY_NOT_FOUND → ciudad no encontrada.

NETWORK_ERROR → problema de conexión.

FETCH_ERROR → error en respuesta de la API.

UNKNOWN_ERROR → cualquier otro error inesperado.

## Decisiones Técnicas

React + TypeScript: tipos seguros y modularidad.

Tailwind CSS: diseño rápido y responsivo.

Lucide React: íconos vectoriales limpios, reemplaza íconos que generaban ruido visual y mantiene consistencia en la UI.

Hooks personalizados (useWeather): centralizan la lógica de la API y el estado del clima.

LocalStorage: persistencia de la última ciudad buscada para mejor experiencia del usuario.

Mensajes dinámicos: diferenciación clara entre errores de ciudad y problemas de red.

## Notas Finales

La app no requiere backend, todo se consume desde la API de Open-Meteo.

La app utiliza los datos tal como los entrega la API de Open-Meteo, por lo que los días en el pronóstico pueden no coincidir exactamente con el día real en que se visualiza la app.

El fondo de la app cambia según el clima actual.

La temperatura y el pronóstico se actualizan automáticamente al buscar una ciudad nueva.