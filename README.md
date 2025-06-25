
# 📍 App Meteo Personalizada – Cerros de Bariloche (Reina Mora)

## Descripción

Esta es una app meteorológica personalizada pensada para una **casa de montaña** ubicada en una zona de altura serrana vecina a la ciudad de **San Carlos de Bariloche**. Su función principal es mostrar variables meteorológicas básicas (temperatura, viento, lluvia, etc.) ajustadas a las **condiciones reales del lugar**, a partir de datos tomados desde estaciones privadas con datos públicos.

Los datos son **recalculados con criterios locales** para reflejar mejor el estado del tiempo en esta zona específica, considerando la diferencia de altitud, orientación y microclima.

## Propósito

Brindar a los **vecinos de la zona serrana** una herramienta confiable para consultar el estado del tiempo **ajustado a su entorno real**, y fomentar una red de observación local que permita mejorar con el tiempo los modelos de cálculo mediante aportes comunitarios.

## Características

- Datos meteorológicos online ajustados localmente.
- Cálculos de temperatura y presión en función de la altitud respecto al aeropuerto y de estaciones meteo en cerros.
- Estimaciones locales de viento y lluvia.
- Visualización clara y minimalista, pensada para celulares.
- Soporte para modo oscuro.
- Posibilidad de mejora progresiva con datos propios de vecinos.

## ¿Cómo funciona?

1. La app toma datos en tiempo real desde la estaciones colaborativas meteo privadas Red Wunderground y Open-Meteo.
2. Aplica fórmulas y ajustes personalizados según la altitud y condiciones del lugar.
3. Muestra los valores resultantes adaptados a la ubicación de la casa de montaña.
4. A futuro, los vecinos podrán cargar sus observaciones para **ajustar y calibrar** los modelos de cálculo.

## Tecnologías utilizadas

- HTML, CSS y JavaScript
- Alojamiento local o en servidor simple
- (Opcionalmente puede integrarse con Dreamweaver para edición)
## Configuración de la API Key de Wunderground

Por motivos de seguridad, la clave de API de Wunderground **no está incluida en este repositorio**.

Para que la aplicación funcione correctamente en tu entorno local, debes crear un archivo llamado `config.local.js` en la raíz del proyecto con el siguiente contenido:

```js
window.WU_API_KEY = "TU_API_KEY_AQUI";
```
Si no tienes una clave, solicita acceso al administrador del proyecto.

---


## Público objetivo

- Vecinos de zonas serranas cercanas a Bariloche
- Usuarios que deseen conocer el estado del tiempo local con mayor precisión que la que ofrece una estación pública lejana

## Estado del proyecto

🟢 **Fase inicial funcional** – Ya operativa con datos en tiempo real y cálculos básicos. Se prevé mejora continua con el aporte de usuarios.

## Licencia

Uso comunitario y abierto. Ver archivo LICENSE para más detalles.
