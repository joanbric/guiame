import { cur_pos } from './store';

export function getCurrPosition() {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				cur_pos.set({
                    useThisLocation: true,
					lat: coords.latitude,
					lng: coords.longitude
				});
			},
			() => {
                cur_pos.set({
                    useThisLocation: false
                })
				console.error('Ha ocurrido un error al obtener la ubicacion del usuario.');
			},
			{
				enableHighAccuracy: true
			}
		);
	}
}
