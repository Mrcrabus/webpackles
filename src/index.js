import regeneratorRuntime from "regenerator-runtime";

window.regeneratorRuntime = regeneratorRuntime;
import * as Request from './requests'

(async () => {
    try {
        // let auth = await Request.auth('a07797c659bd4c2b200d2f48c270140b', '12345')
        //     .then((res) => window.console.log(res))
        await Request.all().then((res) => window.console.log(res));
        await Request.add('Hello', 'world').then((res) => window.console.log(res))

    } catch (e) {
        window.console.log('error!');
        window.console.log(e);
    }
})();