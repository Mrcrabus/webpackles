/* globals fetch  localStorage*/

export async function request(url, options = {}) {
    let response = await fetch(url, options);

    if (response.status !== 200) {
        throw {status: response.status, text: await response.text()};
    }

    return await response.json();
}

export function requestWithToken(url, options = {}) {
    //options.headers ||= {};
    if (options.headers === undefined) {
        options.headers = {};
    }

    options.headers.Authorization = localStorage.getItem('auth__token');
    return request(url, options);
}
