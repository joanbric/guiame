# ![Guiame App logo](static/guiame-logo.png "Guiame App")

La lujosa y clasica ciudad le Londres puede ser un problema al momento de transportarse si es tu primera vez. Pero con **Guiame App** resultara ser mas sencillo la forma en al que te transportas.

## ¿Como funciona?
Solo tienes que
1. Activa tu ubicacion y compartela con la app.
2. Indica hacia donde quieres ir.


**Guiame app** te ayudara a: 
 - 🚏Encontrara la mejor ruta para que llegues a tu destino.
 - 📝Recibiras los detalles te tu transporte e informacion actual de tu viaje.
 - ⏰Tambien puede programar a que lugares tienes que llegar y la aplicacion te indicara cuando debes de tomar tu transporte para no llegar tarde.


## ⚒️ Picos y Mastillos

- La app es creada enteramente usando [Svelte](https://svelte.dev/), me he apoyado en backend con [Svelte Kit](https://kit.svelte.dev/).
- Con la ayuda de [Transport for London Unified API](https://api.tfl.gov.uk/) obtengo la informacion de cada bus, tren, estacion, etc. en la ciudad de Londres.
- [Leaflet](https://leafletjs.com/) para interactuar con el mapa y [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) trazar las rutas en el mapa.
- [Mapbox Geocoding](https://docs.mapbox.com/api/search/geocoding/) para encontrar las coordenadas con el nombre de la ciudad o lugar.
- Para guardar la informacion utilizo una base de datos en remota en [MongoDB](https://cloud.mongodb.com/).
- La app esta desplegada en [Netlify](https://netlify.com/).


## Diseño
El [wireframe](https://www.figma.com/file/DqYARs5Fnuo5ceZbqRqNLK/guiame?node-id=109%3A421 "Wireframe de la aplicacion") fue hecho en [Figma](https://www.figma.com/). El diseño de la aplicacion es de [CityMapper](https://citymapper.com/).