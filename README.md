# ☕ Decorator Coffee — Ejemplo del Patrón Decorator en TypeScript (Deno + Docker)

## Ejecución con Docker

### 1️⃣ Construcción inicial

```bash
docker compose up --build
```
### 2️⃣ Ejecución normal (sin reconstruir)
Cuando ya se tiene la imagen construida y no hemos aplicado cambios
```bash
docker compose up
```
### 🛠 Shell interactivo dentro del contenedor

```bash
docker compose run --rm decorator-deno sh
```

Dentro de la terminar interactiva con el contenedor podemos
ejecutar manualmente el codigo con: 

```bash
deno run src/main.ts
```
