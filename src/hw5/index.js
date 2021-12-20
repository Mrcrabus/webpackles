/* globals localStorage */

import * as articlesApi from './api/articles';
import * as authApi from './api/auth';

let render = async () => {
    try {


        if (localStorage.getItem('auth__token') == null) {
            let authRes = await authApi.login('50537266ded1d3eb1e6923f7f4b2f484', '12345');

            if (authRes.res) {
                localStorage.setItem('auth__token', authRes.token);
            }
        }

        let articles = await articlesApi.all();
        window.console.log('articles count = ' + articles.length);

        let remRes = await articlesApi.remove(50);
        window.console.log(remRes);

        let addRes = await articlesApi.add('New title' + Math.random(), 'new Content');
        window.console.log(addRes);

        if (addRes.res) {
            let editRes = await articlesApi.remove(addRes.id);
            window.console.log(editRes);
        }
    } catch (e) {
        window.console.log('error!');
        window.console.log(e);
    }
};




