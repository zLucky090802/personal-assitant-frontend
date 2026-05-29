
# 🌐 IndexMe - AI Personal Assistant (Frontend)

Este es el cliente web de **IndexMe**, una aplicación bilateral e inteligente diseñada para conectar usuarios con sus propios documentos indexados mediante Inteligencia Artificial. La interfaz cuenta con un diseño minimalista y moderno enfocado en la experiencia de usuario (UX/UI).

Desplegado en producción a través de: **[Netlify](https://index-me.netlify.app)**

## 🚀 Tecnologías Utilizadas

* **Framework:** Angular (v17+)
* **Estilos y Componentes:** HTML5, CSS3 / SCSS (Diseño responsivo y minimalista)
* **Gestión de Estado y Rutas:** Angular Router & Reactive Forms
* **Comunicación HTTP:** HttpClient para consumo de API RESTful con manejo de CORS

## 🛠️ Configuración Local

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### Instalar dependencias
```bash
npm install
Configuración del Entorno (Variables de Entorno)
Crea o edita los archivos de configuración en src/environments/ para apuntar a tu servidor local o de producción:

environment.ts (Desarrollo):

TypeScript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
environment.prod.ts (Producción):

TypeScript
export const environment = {
  production: true,
  apiUrl: '[https://personal-assitant-5.onrender.com/api](https://personal-assitant-5.onrender.com/api)'
};
Servidor de desarrollo
Corre el comando para levantar el entorno local en http://localhost:4200/:

Bash
ng serve
Compilación para Producción (Build)
Para generar los archivos estáticos listos para desplegar en Netlify:

Bash
ng build --configuration production
