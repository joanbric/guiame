<script>
	import { destination } from './store';
	import curr_locat_icon from '$lib/assets/curr_locat_icon.png';
	import { session } from '$app/stores';
	export let cur_pos;

	let map;
	let markerDestination;
	let routing_path = [];

	function loadMap() {
		map = L.map('map', { center: cur_pos, zoom: 17 });

		L.tileLayer(
			`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
			{
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				minZoom: 5,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: $session.user.MAP
			}
		).addTo(map);

		L.marker(cur_pos, {
			icon: L.icon({ iconUrl: curr_locat_icon, iconSize: [50, 50] })
		}).addTo(map);

		markerDestination = L.marker([0, 0]);
	}

	export const setRoute = (route) => {
		if (routing_path) routing_path.forEach((path) => path.remove()); // Every path in the map it's removed.
		routing_path = [];

		route.forEach((leg) => {
			const arrival = leg.arrivalPoint;
			const departure = leg.departurePoint;
			const isWalking = leg.mode.id == 'walking';

			const route = L.Routing.control({
				waypoints: [L.latLng(arrival.lat, arrival.lon), L.latLng(departure.lat, departure.lon)],
				lineOptions: {
					styles: [{ color: isWalking ? 'green' : 'red', dashArray: isWalking ? '10' : 'line' }]
				},
				show: false,
				addWaypoints: false,
				draggableWaypoints: false
			}).addTo(map);

			routing_path.push(route);

			console.log(arrival.lat, arrival.lon);
		});

		console.log(route);
	};

	destination.subscribe((dest) => {
		//For each change in the arrival point
		if (dest.center) {
			const location = dest.center.reverse();
			if (map.hasLayer(markerDestination)) map.removeLayer(markerDestination);
			markerDestination.setLatLng(location);
			markerDestination.addTo(map).bindPopup(dest.place_name).openPopup();

			map.flyTo(location);
		}
	});
</script>

<svelte:head>
	<!--vvv Map API vvv-->
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
		integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
		crossorigin=""
	/>

	<script
		src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
		integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
		crossorigin=""
		on:load={window.hasOwnProperty('L') ? loadMap() : loadMap}></script>
	<!-- Solve the problem when loading the url directly and loading from another internal page link. -->

	<!-- ^^^ Map API ^^^ -->

	<!-- vvv Routing Machine vvv -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css"
	/>
	<script
		src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
	<!-- ^^^ Routing Machine ^^^ -->
</svelte:head>
<div id="map" />

<!-- *** Styles *** -->
<style>
	div#map {
		position: sticky !important;
		top: 0;
		margin: 0;
		padding: 0;
		height: 45vh;
		z-index: 1;
	}
</style>
