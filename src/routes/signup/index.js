import { dev } from '$app/env';
import {db}  from '$lib/database/index';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import * as jwt from 'jsonwebtoken';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const fd = await request.formData();
    const users = await db.users();

	let reqUser = {};

	for (const data of fd.entries()) {
		reqUser[data[0]] = data[1];
	}

	if (!reqUser.email || !reqUser.name || !reqUser.pass)
		return generateError(400, 'Invalid information');
	if (!validateEmail(reqUser.email) || reqUser.name.length < 3 || !validatePassword(reqUser.pass))
		return generateError(400, 'Bad request');
	if (await users.isExistedEmail(reqUser.email))
		return generateError(405, 'E-mail already exists.');

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(reqUser.pass, salt);
	const user_id = randomUUID();
	const refresh_token = randomUUID();
	const newuser = await users.add(reqUser.name, reqUser.email, hash, user_id, refresh_token);
    console.log(newuser)
    const user = {
		name: reqUser.name,
		user_id,
		email: reqUser.email
	};
	const secure = dev ? '' : ' Secure;';
	const key = Math.random() * 2000;
	const token = jwt.sign(user, key.toString(), { expiresIn: `${15 * 60 * 1000}` });

    return {
        status: 201,
		headers: {
			'set-cookie': [
				`refresh_token=${refresh_token}; Max-Age=${30 * 24 * 60 * 60}; Path=/; ${secure} HttpOnly`,
				`token=${token}; Max-Age=${15 * 60}; Path=/; ${secure} HttpOnly`
			]
		},
		body: {
            status: newuser.status,
            message: newuser.message,
        }
	};
}

function generateError(status, message) {
	return {
		status,
		body: {
            status,
			message
		}
	};
}

function validateEmail(email) {
	return email ? true : false;
}

function validatePassword(pass) {
	return pass ? true : false;
}
