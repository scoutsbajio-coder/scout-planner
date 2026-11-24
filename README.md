# Scout Planner

Aplicación web instalable (PWA) para organizar actividades scout, campamentos y el seguimiento del adelanto de Tropa. La información se almacena localmente en IndexedDB.

## Requisitos
- Node.js 20 o posterior recomendado
- npm

## Desarrollo
```bash
npm install
npm run dev
```

## Verificación y producción
```bash
npm run build
npm run preview
```

Publica el contenido de `dist/` en un hosting HTTPS. Si se publica bajo una ruta distinta de `/`, configura `base` en `vite.config.ts` y las rutas de manifest/service worker para esa subruta.

## Instalación móvil
- **Android:** abre la URL HTTPS en Chrome y selecciona *Instalar aplicación* o *Agregar a pantalla principal*.
- **iPhone/iPad:** abre la URL HTTPS en Safari, toca *Compartir* y selecciona *Agregar a pantalla de inicio*.

La primera visita necesita Internet para descargar la aplicación. Después de cargarla, el shell de la aplicación y sus recursos estáticos se almacenan en caché; los datos se consultan y guardan localmente en IndexedDB. No hay sincronización entre dispositivos, ni respaldo remoto automático. Para transferir información entre dispositivos utiliza el respaldo JSON.

## Datos y migraciones
La base de datos `scout-planner-db` mantiene los almacenes originales (`events`, `tasks`, `notes`, `templates`) y crea `scouts`, `evaluations` y `camps` mediante actualización de versión de IndexedDB. La actualización no borra las colecciones existentes. Exporta respaldos desde Configuración antes de actualizar una instalación con datos importantes.

Los respaldos JSON incluyen eventos, tareas, bitácora, plantillas, muchachos, evaluaciones e información de campamentos. Los respaldos antiguos que no incluyan las colecciones nuevas no las reemplazan al importarse.

## Contenido de adelanto
Los retos de tercera, segunda y primera clase se transcribieron de los PDF suministrados (una página por clase). Las imágenes de insignias se recortaron de las páginas originales y se guardan en `public/insignias/`. Se mantienen expresiones y posibles erratas del original. En particular, el reto 15 de Segunda Clase termina en «heridas,» en el documento proporcionado; no se completó con información externa.

El avance porcentual es informativo y no equivale a una aprobación. Los requisitos administrativos y la validación de la Corte de Honor requieren confirmación manual de los responsables.

## Privacidad y alcance
Los registros se guardan en el navegador/dispositivo que utiliza la aplicación. Borrar los datos del navegador puede eliminarlos; exporta respaldos con regularidad. No hay cuentas, roles, cifrado de datos locales ni sincronización multiusuario en esta versión.
