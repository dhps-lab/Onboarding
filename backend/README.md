# 🏦 Onboarding API

Este proyecto implementa una API para el flujo de registro (onboarding) de nuevos clientes de un banco digital.  
Está desarrollada con **NestJS**, estructurada en microservicios (Auth, Products, Onboarding, Health) y diseñada con buenas prácticas de seguridad, validación y modularidad.

---

## 🚀 Características principales

- **Auth:** Generación de tokens JWT válidos por 5 minutos.
- **Products:** Listado de productos del banco con cache local.
- **Onboarding:** Validación y almacenamiento de solicitudes de apertura de cuenta.
- **Health:** Endpoint de salud para monitoreo del servicio.

---

## 📁 Estructura del proyecto

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── dto/
├── products/
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── data/
├── onboarding/
│   ├── onboarding.controller.ts
│   ├── onboarding.service.ts
│   └── dto/
├── health/
│   └── health.controller.ts
├── main.ts
└── app.module.ts
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/digital-bank-onboarding.git
cd digital-bank-onboarding
```

### 2️⃣ Instalar dependencias
```bash
pnpm install
# o npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3001
JWT_SECRET=super_secret_key
```

### 4️⃣ Ejecutar el proyecto
```bash
pnpm start:dev
# o npm run start:dev
```


### 🧩 Con Docker Compose
Desde la raíz del proyecto:

```bash
docker compose up --build
```

Backend disponible en:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 Endpoints principales

### 🔐 Auth
#### `POST /api/auth/login`
- Recibe:  
  ```json
  {
    "username": "admin",
    "password": "1234"
  }
  ```
- Devuelve:
  ```json
  {
    "access_token": "jwt_token"
  }
  ```

---

### 💳 Products
#### `GET /api/products`
Retorna una lista de productos almacenados en memoria (con cache).

#### `GET /api/products/:id`
Retorna un producto específico o 404 si no existe.

---

### 🧾 Onboarding
#### `POST /api/onboarding`
- Requiere **token JWT**.
- Recibe:
  ```json
  {
    "name": "Juan Pérez",
    "document": "12345678",
    "email": "juan@example.com",
    "initialAmount": 500000
  }
  ```
- Devuelve:
  ```json
  {
    "onboardingId": "uuid",
    "status": "REQUESTED"
  }
  ```

Validaciones con `class-validator` aseguran que los campos sean correctos antes de guardar la solicitud.

---

### ❤️ Health
#### `GET /api/health`
Devuelve:
```json
{
  "ok": true
}
```

---

## 🧩 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-validator](https://github.com/typestack/class-validator)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [cache-manager](https://docs.nestjs.com/techniques/caching)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 🧪 Tests (opcional)
Si deseas correr los tests:
```bash
pnpm test
```

---

## 🐳 Dockerfile
Construir y ejecutar el contenedor:
```dockerfile
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
```
---

## 🌟 Posibles Mejoras

- Integrar base de datos por medio de un ORM como typeOrm o Prisma.
- Integrar servicio de autenticación con un proveedor de servicio
- Añadir tests con Jest y Playwright.

---

## 👨‍💻 Autor
**Duvan Humberto Prieto Suarez**  
Senior Software Engineer  
[GitHub](https://github.com/) · [LinkedIn](https://linkedin.com/)

---

## 📄 Licencia
Este proyecto es de uso libre para fines educativos y de evaluación técnica.
