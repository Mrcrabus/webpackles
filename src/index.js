import regeneratorRuntime from "regenerator-runtime";
import * as Requests from './requests'

window.regeneratorRuntime = regeneratorRuntime;

(async () => {
    try {
        await Requests.auth("a07797c659bd4c2b200d2f48c270140b", "12345")
        await Requests.all()
    } catch (e) {
        window.console.log(e)
    }
})();
