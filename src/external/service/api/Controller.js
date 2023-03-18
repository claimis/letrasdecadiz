import obtenerAgrupaciones from "../init.config.js"
export default class Controller {
    token;
    limit_wipped;

    constructor() {

        this.token = null;
        this.limit_wipped = 0;


    }

    // set:


    // get:

    getController() {
        obtenerAgrupaciones();
    }
}