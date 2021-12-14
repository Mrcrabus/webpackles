/* globals FormData */
import request from "./http";

let password = '1234';
let login = 'a07797c659bd4c2b200d2f48c270140b';

export function auth(login, password) {
    let body = new FormData();
    body.append('login', login);
    body.append('password', password);

    return request('/js-hw5-api/auth.php', {
        method: 'POST', body
    })
}


let token = auth(login, password).success.token


export function all() {
    return request('/js-hw5-api/articles.php', {
        method: "GET"
    })
}


export function add(title, content) {
    let body = new FormData();
    body.append('title', title)
    body.append('content', content)

    return request('/js-hw5-api/articles.php', {
        method: "POST",
        headers: {
            Authorization: token
        }
    })
}
