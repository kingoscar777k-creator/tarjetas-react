# Recetas de casa — Tarjetas en React

Proyecto de práctica para crear un componente reutilizable de tarjetas en React usando props y CSS responsive.

## Requisitos
- Node.js 18 o superior
- npm

## Cómo ejecutar el proyecto
1. Descarga y descomprime la carpeta.
2. Abre una terminal dentro de `tarjetas-react`.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en el navegador la dirección que indique Vite (normalmente `http://localhost:5173`).

Para comprobar la versión de producción:
```bash
npm run build
npm run preview
```

## Estructura
```text
tarjetas-react/
├── public/
│   └── images/           # Ilustraciones locales SVG
├── src/
│   ├── App.jsx           # Página principal y datos de las recetas
│   ├── Tarjeta.jsx       # Componente reutilizable que recibe props
│   ├── main.jsx          # Punto de entrada de React
│   └── styles.css        # Estilos y diseño responsive
├── index.html
├── package.json
└── README.md
```

## Conceptos de React usados
- `Tarjeta.jsx` es un componente reutilizable.
- `App.jsx` pasa los datos de cada receta mediante la prop `receta`.
- `map()` genera seis tarjetas a partir de un array.
- Cada tarjeta tiene una `key` única.
- Las imágenes están guardadas en `public/images`, por lo que no dependen de una URL externa.

## Commits y GitHub
No se puede crear un repositorio remoto ni hacer `push` sin acceder a tu cuenta de GitHub. Para subirlo:

```bash
git init
git add .
git commit -m "Crear tarjetas de recetas con React"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Cambia la URL del remoto por la de tu repositorio. Si haces cambios adicionales, puedes guardar otros commits:
```bash
git add .
git commit -m "Mejorar estilos responsive"
git push
```

## Captura de pantalla
Se incluye `captura-resultado.png` en el ZIP como vista previa del diseño. Para obtener una captura real de la aplicación ejecutándose, inicia el proyecto con `npm run dev` y haz una captura desde el navegador.
