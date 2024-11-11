'''
# Tienda de Fiestas y Decoración

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) y configurado con TypeScript y Tailwind CSS. La tienda ofrece una variedad de artículos de fiesta y decoración, con enlaces directos a WhatsApp para facilitar la compra de productos.

## Funcionalidades

- **Página de Inicio**: Bienvenida a la tienda y descripción de los productos y servicios.
- **Misión y Visión**: Conoce los valores y objetivos de la tienda.
- **Tienda**: Categorías de productos con enlace a WhatsApp para realizar pedidos directamente.
- **Contacto**: Información de contacto, incluidas redes sociales y WhatsApp.

## Estructura del Proyecto

El proyecto sigue la estructura de la carpeta `app` introducida en Next.js 13, utilizando componentes reutilizables como `Footer`, que aparece en todas las páginas.

## Tecnologías Usadas

- **Next.js**: Framework de React para SSR y SSG.
- **TypeScript**: Tipado estático para un código más seguro y predecible.
- **Tailwind CSS**: Framework de CSS para un diseño moderno y eficiente.
- **Supabase**: Para gestionar la base de datos (si aplica).

## Configuración Inicial

1. Clona el repositorio y navega al directorio del proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install

## Configuración Inicial

Crea un archivo `.env.local` en la raíz del proyecto y agrega cualquier variable de entorno necesaria (e.g., claves de Supabase si las estás usando).

## Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo, usa el siguiente comando:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
Abre http://localhost:3000 en tu navegador para ver la tienda en funcionamiento.

Editar el Proyecto
Puedes comenzar a editar las páginas editando app/page.tsx o cualquier otro archivo en la carpeta app. Las actualizaciones se reflejarán automáticamente.

Despliegue en Vercel
Este proyecto está diseñado para un despliegue rápido en Vercel, la plataforma de los creadores de Next.js. Para desplegar tu aplicación:

Conéctate a tu cuenta de Vercel.
Selecciona el repositorio y configura las variables de entorno necesarias.
Sigue los pasos en la documentación de Next.js para despliegue en Vercel.
Más Información
Para aprender más sobre Next.js, visita:

Documentación de Next.js: Obtén información detallada sobre las características y API de Next.js.
Tutorial interactivo de Next.js: Aprende a usar Next.js paso a paso.
También puedes visitar el repositorio de Next.js en GitHub para enviar sugerencias o contribuir al proyecto. 