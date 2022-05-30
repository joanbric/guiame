<script>
    export let cur_pos;
    var map;
	function loadMap() {
		const ACCESS_TOKEN =
			'pk.eyJ1Ijoiam9hbmJyaWMiLCJhIjoiY2wzNHhsNzFpMHppMjNkcDU1bW5mZ25ubiJ9.akfP7_JDAc3JmhANrrntrA';
		const ACCESS_TOKEN_V2 =
			'sk.eyJ1Ijoiam9hbmJyaWMiLCJhIjoiY2wzNTY3NmZzMG9nbDNkcG93eDk2emN2NiJ9.upfHtZXNCEvBRgfiA-i-Bw';

		const zoom_level = 17;
		const min_zoom = 5;

		map = L.map('map', { center: cur_pos, zoom: zoom_level });
		console.log(map);

		L.tileLayer(
			`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
			//'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
			{
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				minZoom: min_zoom,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: ACCESS_TOKEN
			}
		).addTo(map);
	}
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
		on:load={loadMap}></script>

	<!-- ^^^ Map API ^^^ -->
</svelte:head>




<div id="map" />




<!-- *** Styles *** -->
<style>
	div#map {
		margin: 0;
		padding: 0;
		height: 45vh;
		z-index: 1;
	}
</style>
