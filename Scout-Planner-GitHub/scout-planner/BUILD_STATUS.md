# Estado de entrega y verificaciones

Fecha: 24 de noviembre de 2026

## Verificaciones ejecutadas
- `tsc -b --pretty false`: **correcto** (sin errores de TypeScript).
- Iconos PWA: comprobados como PNG de 192 × 192 y 512 × 512.
- Manifest: JSON válido y contiene `standalone`, inicio, orientación y los dos tamaños de icono.
- Migración IndexedDB: el esquema incrementa de versión 2 a 3 y crea los almacenes nuevos sin borrar los existentes.
- ZIP de entrega: se excluyen `node_modules` y artefactos `dist` antiguos para no incluir una compilación obsoleta.

## Verificaciones pendientes / limitaciones del entorno
- `npm run build` no pudo completarse: el `node_modules` incluido en el ZIP de origen corresponde a Windows y no contiene el binario nativo Linux requerido por Rollup (`@rollup/rollup-linux-x64-gnu`).
- Se intentó instalar dependencias en este entorno, pero la instalación no terminó dentro del tiempo disponible. Por ello no se afirma que el build de Vite haya sido exitoso.
- No se pudo ejecutar una prueba real en navegador para IndexedDB, restauración de respaldos, instalación PWA, modo offline o adaptación en dispositivos físicos.
- No se generó `dist` nuevo. Después de descargar el ZIP, ejecutar `npm install` y `npm run build` en un entorno con acceso al registro npm para generar `dist`.

## Alcance funcional incluido
- Nuevas rutas y módulos de Campamentos y Adelanto de Tropa.
- Seguimiento de los retos transcritos de los tres PDF y registro de evaluaciones por muchacho y clase.
- Historial de evaluaciones conservado al cambiar de clase.
- Insignias recortadas de los PDF originales y guardadas en `public/insignias/`.
- Nuevos almacenes IndexedDB y respaldo JSON extendido; los respaldos antiguos sin colecciones nuevas no borran esas colecciones.
- Manifest y service worker actualizados para PWA y caché offline del shell y recursos consultados.

## Pendiente para una versión de producción completa
La compilación de producción y pruebas integrales descritas en el encargo deben ejecutarse después de instalar dependencias en un entorno compatible. Algunas operaciones avanzadas (reordenamiento de cronograma, reportes PDF, vinculación automática de participantes con el padrón y cálculo automático de cantidades de menú) aún no están implementadas en esta entrega.
