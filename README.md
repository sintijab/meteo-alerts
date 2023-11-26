Information about the weather is collected from origins: <br>

# MeteoAlerts

1. [WeatherAPI.com](https://rapidapi.com/weatherapi/api/weatherapi-com),
   [API schema specs](https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/forecast-weather)
2. [meteoalarm.org](https://www.meteoalarm.org/) MeteoAlarm - Alerting Europe
   for Extreme Weather
3. [wettergefahren.de](https://www.wettergefahren.de/warnungen/warnsituation_landkreise.html?v=1)
   The German Weather Service federal authority within the scope of the Federal
   Ministry of Transport and Digital Infrastructure.

## Dockerize Applications

### Build Application on client

```sh
cd client
docker image build -t DOCKERHUB_USERNAME/meteo-alerts-client:latest .
```

### Run Docker container

```sh
# docker run -p [host_port]:[container_port]  [image_id/image_tag]
docker run -p 3000:3000 DOCKERHUB_USERNAME/meteo-alerts-client
```

### List Docker containers

```sh
docker ps
```

### Build Application on backend

```sh
cd server
docker image build -t DOCKERHUB_USERNAME/meteo-alerts-server:latest .
```
