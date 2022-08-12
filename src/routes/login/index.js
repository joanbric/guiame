import db from '$lib/database.js';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const fd = await request.formData();

	const user = fd.get('user');
	const pass = fd.get('pass');

	const userResponse = await db.login(user, pass);

	if (!userResponse.status)
		return {
			status: 202,
			body: {
				response: {
					message: userResponse.message
				}
			}
		};

	return {
		status: 303,
		headers: {
			location: '/app'
		},
		body: {
			response: {
				message: userResponse.message
			}
		}
	};
}
