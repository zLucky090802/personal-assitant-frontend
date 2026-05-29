# 🌐 IndexMe - AI Personal Assistant (Frontend)

This is the web client for **IndexMe**, a smart, bilateral platform designed to connect users with their own indexed documents using Artificial Intelligence. The interface features a modern, minimalist design focused on exceptional User Experience (UX/UI).

Deployed in production at: **[Netlify](https://index-me.netlify.app)**

## 🚀 Tech Stack

* **Framework:** Angular (v17+)
* **Styles & Components:** HTML5, CSS3 / SCSS (Responsive and minimalist design)
* **State & Route Management:** Angular Router & Reactive Forms
* **HTTP Communication:** HttpClient for RESTful API consumption with CORS handling

## 🛠️ Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher).

### Install dependencies
```bash
npm install
Environment Configuration (Environment Variables)
Create or edit the configuration files inside src/environments/ to point to your local or production server:

environment.ts (Development):

TypeScript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:8000/api'
    };
    ```
* **`environment.prod.ts` (Production):**
```typescript
    export const environment = {
      production: true,
      apiUrl: '[https://personal-assitant-5.onrender.com/api](https://personal-assitant-5.onrender.com/api)'
    };
    ```

### Development Server
Run the following command to start the local development environment at `http://localhost:4200/`:
```bash
ng serve
Production Build
To generate the static production-ready files for deploying to Netlify:

Bash
ng build --configuration production
