import 'dotenv/config'

/** @type {import('@sveltejs/kit').GetSession;} */
export function getSession(){
    return {
        user: {
            MAP: process.env.MAP_ACCESS_TOKEN
        }
    }
}