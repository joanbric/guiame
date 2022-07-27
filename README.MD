# ![Guiame App logo](static/guiame-logo.png "Guiame App")

The luxurious and classic city of London can be a problem when transporting if it is your first time. But with **Guiame App** the way you transport yourself will be easier.

## How does it work?
You only have to
1. Activate your location and share it with the app.
2. Indicate where you want to go.


**Guiame app** will help you:
 - 🚏 It will find the best route for you to reach your destination.
 - 📝You will receive the details of your transportation and current information about your trip.
 - ⏰ You can also program which places you have to go to and the application will tell you when you should take your transport so as not to be late.


## ⚒️ Picks and Hammers

- The app is created entirely using [Svelte](https://svelte.dev/), I supported it in the backend with [Svelte Kit](https://kit.svelte.dev/).
- With the help of [Transport for London Unified API](https://api.tfl.gov.uk/) I get the information of each bus, train, station, etc. in the city of London.
- [Leaflet](https://leafletjs.com/) to interact with the map and [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) to plot the routes on the map.
- [Mapbox Geocoding](https://docs.mapbox.com/api/search/geocoding/) to find coordinates with city or place name.
- To save the information I use a remote database in [MongoDB](https://cloud.mongodb.com/).
- The app is deployed on [Netlify](https://netlify.com/).


## Design
The [wireframe](https://www.figma.com/file/DqYARs5Fnuo5ceZbqRqNLK/guiame?node-id=109%3A421 "Application wireframe") was made in [Figma](https://www.figma.com/). The design of the app is from [CityMapper](https://citymapper.com/).