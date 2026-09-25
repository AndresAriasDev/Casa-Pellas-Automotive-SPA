# Casa Pellas Automotive SPA

Aplicación web de una sola página para explorar el catálogo de vehículos Toyota de Casa Pellas, consultar el detalle de cada modelo y enviar solicitudes de información. Fue desarrollada como prueba técnica para la vacante de Webmaster JR.

## Demo

La aplicación está publicada en [casapellas.lagransultana.com](https://casapellas.lagransultana.com/).

## Funcionalidades

- Catálogo de vehículos con Hero de modelos destacados, navegación por dots y gestos de deslizamiento en móvil.
- Búsqueda por marca o modelo, filtro por categoría y ordenamiento por precio o año.
- Selector de moneda NIO/USD que permite visualizar los precios en ambas monedas y recuerda la moneda seleccionada mediante el almacenamiento local del navegador.
- Vista de detalle por vehículo en `/vehiculo/:id`, con precio, especificaciones, colores disponibles, galería con visor, video y vehículos relacionados.
- Formularios de cotización, prueba de manejo y contacto con validaciones, estados de envío, manejo de errores y confirmación.
- Las solicitudes enviadas desde los formularios se procesan mediante Google Apps Script y se almacenan en Google Sheets para su consulta y seguimiento.
- Página de contacto con mapa de sucursales mediante Leaflet y teselas de OpenStreetMap.
- Rutas de Servicios, Términos y condiciones y Política de privacidad con página temporal de mantenimiento, además de una página 404.
- Botón global de WhatsApp con mensaje contextual para el vehículo visitado.
- Diseño responsive para escritorio y dispositivos móviles, con navegación accesible mediante teclado y enlaces internos de React Router.
- Estados de carga para catálogo y detalle, reintento ante error de catálogo y estado sin resultados al aplicar filtros.

## Registro de solicitudes

Las solicitudes enviadas desde los formularios se almacenan en una hoja de Google Sheets mediante Google Apps Script. Para efectos de esta prueba técnica, se proporciona acceso a los registros.

[Ver solicitudes registradas en Google Sheets](https://docs.google.com/spreadsheets/d/1pf3eyjgh1oDx73wXO_fvUIPlFfS--B8b8K_CY9QL7lw/edit?usp=sharing)

## Tecnologías utilizadas

- React 19
- TypeScript 6
- Vite 8
- React Router DOM 7
- Leaflet 1.9 y OpenStreetMap
- ESLint

## Requisitos previos

Para ejecutar el proyecto localmente necesitas:

- Node.js
- npm

## Instalación y ejecución local

```bash
git clone https://github.com/AndresAriasDev/Casa-Pellas-Automotive-SPA.git
cd Casa-Pellas-Automotive-SPA
npm install
npm run dev
```

Vite mostrará en la terminal la URL local para abrir la aplicación, normalmente `http://localhost:5173/`.

## Build de producción

```bash
npm run build
```

El comando ejecuta la comprobación de TypeScript y genera el build de Vite en `dist/`.

Para revisar el build localmente, el proyecto incluye:

```bash
npm run preview
```

## Decisiones técnicas

- La SPA se desarrolló con React y TypeScript, separando páginas, componentes reutilizables, datos, servicios, tipos y utilidades.
- React Router gestiona las rutas públicas, el scroll al cambiar de página y los títulos dinámicos de documento.
- `CatalogPage` se mantiene como vista principal; Contacto, Servicios, detalle y 404 se cargan de forma diferida mediante `React.lazy` y `Suspense`.
- Los datos ligeros del catálogo se centralizan en `vehicles.ts`. Galerías, colores y videos se cargan bajo demanda por vehículo desde módulos de medios dinámicos al entrar a su detalle.
- Las cards se reutilizan tanto en el catálogo como en el carrusel de vehículos relacionados.
- Las validaciones de solicitudes están centralizadas en utilidades específicas de cada formulario. El servicio compartido de envíos construye el payload y realiza un POST JSON compatible con el endpoint de Google Apps Script.
- Leaflet se utiliza únicamente en la página de contacto, junto con datos de sucursales centralizados.

## Estructura del proyecto

```text
src/
├── assets/       # Recursos de marca, iconos y medios de vehículos
├── components/   # Componentes reutilizables de interfaz
├── config/       # Configuración de aplicación
├── data/         # Catálogo, sucursales, fichas y medios por vehículo
├── pages/        # Vistas asociadas a las rutas
├── services/     # Acceso a vehículos y envío de solicitudes
├── types/        # Tipos de TypeScript
└── utils/        # Validación y formateo
```

## Posibles mejoras futuras

- Consumir catálogo, precios y disponibilidad desde una API o CMS.
- Incorporar una capa de backend propia para administrar solicitudes y su seguimiento.
- Añadir pruebas automatizadas para filtros, formularios y rutas.
- Generar variantes responsive adicionales para imágenes y ampliar la optimización de medios.
- Integrar servicios empresariales y un panel administrativo cuando estén disponibles.

## Autor

Andrés Arias · [Repositorio en GitHub](https://github.com/AndresAriasDev/Casa-Pellas-Automotive-SPA)
