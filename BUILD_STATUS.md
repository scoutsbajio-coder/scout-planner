# Estado de entrega y verificaciones

Fecha: 25 de noviembre de 2026

## Cambios de esta entrega
- **Rutas con base de despliegue:** el logo y las insignias usan `import.meta.env.BASE_URL` (antes eran rutas absolutas que fallaban en `/scout-planner/`).
- **404.html:** el flujo de GitHub Actions copia `index.html` a `404.html` para que recargar una sección no dé error.
- **Exportación CSV corregida:** el separador de líneas (`\r\n`) y el BOM (`\uFEFF`) se escribían como texto literal.
- **Service worker con precaché completo (`vite-plugin-pwa` + Workbox):** incluye JS y CSS con hash, iconos e insignias; navegación sin conexión a cualquier sección.
- **Manifest generado por el plugin:** iconos `any` y `maskable` separados (se agregaron `icon-maskable-192/512.png` y `apple-touch-icon.png`), `id`, categorías y accesos directos.
- **Aviso de actualización** («Hay una versión nueva» → Actualizar / Más tarde) y aviso «Lista para usarse sin conexión».
- **Botón/guía de instalación** en Ajustes (Android y escritorio con botón; iPhone con instrucciones).
- Se eliminan las cachés manuales antiguas (`scout-planner-*`) al abrir la app.

## Verificaciones ejecutadas
- `tsc -b`: correcto.
- `npm run build -- --base=/scout-planner/`: correcto; precaché de 24 entradas (≈403 KiB) con JS, CSS, HTML, iconos e insignias.
- Servido `dist` bajo `/scout-planner/`: todos los archivos del precaché responden 200; el bundle ya no contiene rutas absolutas `/insignias` ni `/icons`.

## Pendiente de probar en dispositivo real (no se pudo en este entorno)
- Instalación en Android (Chrome) y en iPhone (Safari).
- Modo avión: abrir la app instalada y navegar entre secciones.
- Flujo de actualización: publicar una versión nueva y confirmar que aparece el aviso (las instalaciones previas recibirán el nuevo service worker con el mismo nombre de archivo).
- Recarga de una sección en GitHub Pages (`/scout-planner/campamentos`).

## Siguientes pasos sugeridos
Almacenamiento persistente (`navigator.storage.persist()`) y recordatorio de respaldo; reportes PDF; vinculación de participantes con el padrón; limpieza de `Dashboard.tsx.tmp` y `.gitignore`.
