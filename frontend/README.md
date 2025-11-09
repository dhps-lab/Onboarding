# 💻 Frontend — Onboarding App

Aplicación web desarrollada con **Next.js 14 + TypeScript** que simula el flujo de registro (onboarding) de nuevos clientes para un banco digital.  
Incluye autenticación, listado de productos y un formulario protegido de apertura de cuenta.

---

## ⚙️ Tecnologías

| Tecnología | Descripción |
|-------------|--------------|
| **Next.js 14** | Framework React moderno |
| **TypeScript** | Tipado estático |
| **Tailwind CSS** | Estilos rápidos y responsivos |
| **Axios / Fetch API** | Comunicación con backend |
| **JWT** | Autenticación basada en token |
| **Docker** | Empaquetado del servicio |

---

## 🏗️ Estructura del Proyecto

```
frontend/
├── public/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Login
│   │   ├── products/page.tsx  # Listado de productos
│   │   ├── onboarding/page.tsx# Formulario onboarding
│   │   └── layout.tsx
│   ├── components/            # Componentes reutilizables
│   ├── lib/api.ts             # Llamadas al backend
│   └── styles/                # Estilos globales
├── package.json
└── Dockerfile
```

---

## 🚀 Ejecución

### 🧩 Con Docker Compose
Desde la raíz del proyecto:

```bash
docker compose up --build
```

Frontend disponible en:  
👉 [http://localhost:3001](http://localhost:3001)

---

### 💻 Localmente
```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Flujo Principal

1. **Login**
   - Envía credenciales ficticias al backend (`/auth/login`).
   - Guarda el token JWT en `localStorage`.

2. **Listado de Productos**
   - Consume `/products` del backend.
   - Muestra información simulada.

3. **Onboarding**
   - Formulario protegido que requiere JWT.
   - Envía nombre, documento, email y monto inicial.
   - Muestra el estado devuelto `{ onboardingId, status }`.

---

## 🧱 Variables de Entorno

| Variable | Descripción |
|-----------|-------------|
| `NEXT_PUBLIC_API_URL` | URL base del backend NestJS |

Ejemplo:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🐳 Dockerfile

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🌟 Posibles Mejoras

- Integrar React Query o Zustand.
- Validaciones con Zod o Yup.
- Mejorar la interfaz con un wizard de pasos.
- Añadir tests con Jest y Playwright.

---

## 👨‍💻 Autor
**Duvan Humberto Prieto Suarez**  
Senior Software Engineer  
[GitHub](https://github.com/) · [LinkedIn](https://linkedin.com/)