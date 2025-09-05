# App de Clima — Vue 3 + Vite (Clean Architecture, SOLID, Tailwind)
Aplicación de clima elegante construida con **Vue 3 + Vite**, principios de **Clean Code**, **SOLID** y **Arquitectura Limpia**. Consume **OpenWeather API** para mostrar el clima por ciudad. UI responsive con **TailwindCSS**.

## ✨ Características
- Búsqueda por ciudad.
- Datos: temperatura, sensación térmica, humedad, viento, estado del cielo.
- Arquitectura por capas: domain / application / infrastructure / ui.
- Variables de entorno `VITE_*` para build con Vite.

## 🧱 Arquitectura Empleada
```
src/
  domain/
    entities/
    repositories/
  application/
    use-cases/
  infrastructure/
    dto/
    mappers/
    Apis ServiceProvider/
  ui/
    components/
    views/
    composables/
  main.ts
  App.vue
```

## 🔑 Variables de entorno
Crea un archivo `.env` en la raíz con las siguientes variables:
```
VITE_OPENWEATHER_API_KEY=TU_API_KEY_AQUI
VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
VITE_WEATHER_UNITS=metric
VITE_DEFAULT_LANG=es
```

## ▶️ Ejecutar en local
Requisitos: Node.js 18+ (recomendado 20+) y NPM 9+.
```bash
npm install
cp .env.example .env   # edita tu API key
npm run dev            # http://localhost:5173
```
Build y preview:
```bash
npm run build
npm run preview
```

## 🐳 Ejecutar con Docker
Incluye un Dockerfile multistage que compila la app (Vite) y la sirve con Nginx como SPA.

Build:
```bash
docker build -t app-clima-vue:latest .
```
Run:
```bash
docker run -d --name app-clima -p 8080:80 app-clima-vue:latest
# Abre http://localhost:8080
```

## 🧩 Docker Compose
Con `docker-compose.yml` puedes construir y levantar con un solo comando.
```bash
docker compose up --build -d
docker compose logs -f
docker compose down
```
**Importante:** Vite embebe variables `VITE_*` en tiempo de build. Si cambias `.env`, reconstruye la imagen: `docker compose build --no-cache`.

## 🔧 Nginx (SPA)
`nginx.conf` usa `try_files` para redirigir rutas al `index.html` y evitar 404 al refrescar.

## 📄 Licencia
MIT (o la que prefieras).
