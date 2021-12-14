/* globals fetch */

export default async function request(url, options = {}) {
    let response = await fetch(url, options);

    if (response.status !== 200) {
        throw {
            status: response.status, text: await response.text()
        }
    }
    return await response.json()
}
