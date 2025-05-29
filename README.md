# Proyecto Mapa Google React

Este proyecto es una aplicación React que muestra un mapa de Google Maps centrado en una ubicación específica, con un marcador y una ventana de información (InfoWindow) al hacer clic en el marcador.  
Se utiliza la librería [`@react-google-maps/api`](https://www.npmjs.com/package/@react-google-maps/api) para integrar Google Maps y Tailwind CSS para estilos básicos.

---

## Explicación del proyecto

El objetivo del proyecto es mostrar un mapa interactivo con Google Maps dentro de una aplicación React.  
- Se carga el mapa usando el componente `LoadScript` con una API Key protegida mediante variables de entorno (.env).  
- El mapa se centra en una ciudad determinada (puedes cambiar la latitud y longitud en el componente `Mapa`).  
- Se agrega un marcador y una ventana de información que aparece al hacer clic en el marcador.  
- Se aplica diseño básico con Tailwind CSS para una mejor apariencia.

---

## Instrucciones para correrlo localmente

### Requisitos

- Node.js (versión 14 o superior recomendada)  
- npm (gestor de paquetes de Node.js)  
- API Key válida de Google Maps con permisos para Maps JavaScript API

### Pasos para ejecutar

1. Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git

cd tu_repositorio

npm install

REACT_APP_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

npm start

http://localhost:3000
