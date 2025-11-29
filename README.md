# ☕ Decorator Coffee

## Ejecución con Docker

### 1️⃣ Clonar el proyecto localmente

```bash
git clone https://github.com/JaviierEspitia/decorator-coffee.git
```
### 2️⃣ Dentro de la carpeta del proyecto ejecutar
```bash
docker compose up --build
```
### ⚠️ Si se quiere volver a ejecutar el proyecto
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
