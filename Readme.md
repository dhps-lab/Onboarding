# 🏦 Onboarding API — Banco Digital

Este proyecto simula el flujo de **onboarding de nuevos clientes** para un banco digital, implementado con una arquitectura basada en **microservicios**, **NestJS** en el backend y **Next.js** en el frontend.

---

## 🚀 Tecnologías Utilizadas

| Componente | Tecnología |
|-------------|-------------|
| Backend | [NestJS](https://nestjs.com/) |
| Frontend | [Next.js 14](https://nextjs.org/) |
| Lenguaje | TypeScript |
| Contenerización | Docker + Docker Compose |
| Autenticación | JWT |
| Validaciones | class-validator |
| Caché | node-cache o Redis (opcional) |

---

## 📦 Estructura del Proyecto

```plaintext
├── backend/ # API NestJS
│ ├── src/
│ ├── test/
│ ├── Dockerfile
│ └── README.md
├── frontend/ # Interfaz Next.js
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── README.md
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Configuración del Entorno

### 🧩 Requisitos Previos
- Node.js 20+
- Docker y Docker Compose instalados

---

## 🐳 Ejecución con Docker Compose

Ejecuta desde la raíz del proyecto:

```bash
docker compose up --build
```

| Servicio     | Puerto Local | Descripción                                                             |
| ------------ | ------------ | ----------------------------------------------------------------------- |
| **backend**  | `3000`       | API NestJS con endpoints `/auth`, `/products`, `/onboarding`, `/health` |
| **frontend** | `3001`       | Aplicación Next.js conectada al backend                                 |


## 🧠 Funcionalidades Principales
1. Autenticación (Auth)

- Endpoint: `POST /auth/login`

- Recibe un usuario y contraseña ficticios.

- Retorna un JWT válido por 5 minutos.

2. Productos (Products)

- `GET /products`: lista de productos disponibles.

- `GET /products/:id`: obtiene un producto específico.

3. Onboarding

- `POST /onboarding`: requiere token JWT.

- Recibe: `nombre`, `documento`, `email`, `montoInicial`.

- Valida con `class-validator`.

- Guarda con estado `"REQUESTED"`.

- Retorna `{ onboardingId, status }`.

4. Health Check

- `GET /health` → `{ ok: true }`

## 🧩 Caché (Plus)

El backend puede implementar un caché en memoria (por ejemplo con `node-cache` o Redis) para reducir tiempos de respuesta en `/products`.

## 🎨 Frontend

El frontend se desarrolló con Next.js e incluye:

Formulario de **login** (obtiene y guarda el JWT).

Página de **productos** (consume `/products`).

Página de **onboarding** (envía solicitud con token válido).

Diseño simple con **Tailwind CSS**.

Comunicación con el backend vía **Axios / Fetch API**.

Más detalles: [frontend/README.md](frontend/README.md)

## 🧱 Backend  
El backend se desarrolló con **NestJS** e incluye los siguientes módulos:

- **Auth:** endpoint `POST /auth/login` que recibe credenciales ficticias y devuelve un **JWT válido por 5 minutos**.  
- **Products:** endpoints `GET /products` y `GET /products/:id` que retornan un listado simulado de productos o un producto individual.  
- **Onboarding:** endpoint protegido `POST /onboarding` que recibe nombre, documento, email y monto inicial.  
  - Valida los datos con **class-validator**.  
  - Guarda la información en memoria con estado `"REQUESTED"`.  
  - Devuelve `{ onboardingId, status }`.  
- **Health:** endpoint `GET /health` que retorna `{ ok: true }`.  

🧩 Tecnologías principales:
- NestJS con TypeScript  
- JWT (jsonwebtoken)  
- class-validator para validaciones  
- Simulación de base de datos en memoria  
- Caching de peticiones
- Integración y despliegue mediante Docker  

Más detalles: [`backend/README.md`](backend/README.md)


## ⚒️ Scripts Comunes
**Backend**
```bash
cd backend
npm install
npm run start:dev
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

## 🧱 Variables de Entorno
**Backend**
```ini
JWT_SECRET=secret_key
JWT_EXPIRATION=300s
PORT=3000
```

**Frontend**
```ini
NEXT_PUBLIC_API_URL=http://localhost:3000
```