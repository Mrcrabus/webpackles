/* globals FormData */

import {request, requestWithToken} from "./http";

export function all() {
    return request('/js-hw5-api/articles.php');
}

export function remove(id) {
    return requestWithToken(`/js-hw5-api/articles.php?id=${id}`, {
        method: 'DELETE'
    });
}

export function add(title, content) {
    let body = new FormData();
    body.append('title', title);
    body.append('content', content);

    return requestWithToken(`/js-hw5-api/articles.php`, {
        method: 'POST',
        body
    });
}
