# 🌤️ App de Clima con Vue 3 + Clean Architecture

Aplicación web elegante construida con **Vue 3**, **Vite**, **TailwindCSS** y principios de **Clean Code** & **Arquitectura Limpia**. Consulta el clima actual por ciudad usando la API de [OpenWeatherMap](https://openweathermap.org/api).

![clima-vue](./preview.png)

---

## 🚀 Tecnologías

- ⚙️ [Vue 3](https://vuejs.org/) (Composition API)
- ⚡ [Vite](https://vitejs.dev/) – Empaquetado ultrarrápido
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Diseño moderno sin esfuerzo
- 🧱 Arquitectura limpia + principios SOLID
- 🌍 API REST: [OpenWeatherMap](https://openweathermap.org/current)
- 💅 Componentes desacoplados, servicios y uso de mappers

---

## 📦 Estructura de Carpetas

```
src/
├── application/         # Casos de uso (interactúan con servicios)
├── domain/              # Entidades y modelos del dominio
├── infrastructure/      # Conexión con API externa (repositorios reales)
├── presentation/        # Componentes Vue y vistas
├── main.js              # Punto de entrada principal
```

> Basado en Clean Architecture: separación clara entre lógica de negocio, presentación y detalles de infraestructura.

---

## 🖼️ UI Preview

| Pantalla de búsqueda | Resultado del clima |
|----------------------|---------------------|
| ![busqueda](./screens/search.png) | ![resultado](./screens/result.png) |

---

## 🔧 Instalación local

1. **Clona el proyecto**
   ```bash
   git clone https://github.com/LuisGuanangaGamarra/App-de-Clima-Vue.git
   cd App-de-Clima-Vue
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Agrega tu API Key de OpenWeatherMap**

   Crea un archivo `.env` con tu key:

   ```
   VITE_OPEN_WEATHER_API_KEY=tu_api_key_aqui
   VITE_OPEN_WEATHER_BASE_URL=url_weather_service_aqui
   VITE_WEATHER_UNITS=metric
   VITE_DEFAULT_LANG=es
   ```

   > Consigue tu API Key gratuita aquí: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

4. **Ejecuta la app en desarrollo**
   ```bash
   npm run dev
   ```

---

## 🧪 Funcionalidades

- ✅ Consulta del clima actual en ciudades (temperatura, humedad, etc.)
- ✅ Separación de capas (presentación / lógica / infraestructura)
- ✅ Código limpio, mantenible y preparado para escalar

---

## 🛠️ Buenas prácticas aplicadas

- 🔄 **Componentes reutilizables**
- 🧠 **Mapeo de DTOs** (transformación de respuesta de la API)
- 📁 **Separación de responsabilidades**
- 🧹 Código limpio, modular y con nombres expresivos

---

## 🌐 Demo en producción

👉 _Opcional: puedes desplegar en [Netlify](https://www.netlify.com/) o [Vercel](https://vercel.com/)_

---

## 📄 Licencia

MIT – Libre uso y modificación para fines personales y profesionales.

---

## 👨‍💻 Autor

**Luis Guananga**  
Frontend & Full-Stack Developer  
[LinkedIn](https://www.linkedin.com/in/luis-virgilio-guananga-gamarra) | [GitHub](https://github.com/LuisGuanangaGamarra)
