export async function handle({event, resolve}) {

    return await resolve(event, {
        filterSerializedResponseHeaders: (key, value) => {
            return key.toLowerCase() === 'content-type'
        }
    });
}