/* globals FormData */

import {request} from "./http";

export function login(login, password) {
    let body = new FormData();
    body.append('login', login);
    body.append('password', password);

    return request(`/js-hw5-api/auth.php`, {
        method: 'POST',
        body
    });
}
