import obtenerAgrupaciones from "../init.config.js";

export default class Controller {
    token;
    limit_wipped;
    name_coll;

    constructor() {

        this.token = null;
        this.limit_wipped = 0;
        this.name_coll = "default";

    }

    set setNameColl(name) {
        this.name_coll = name
    }


    get nameColl() {
        return this.name_coll;
    }

    getController() {
       // obtenerAgrupaciones();
    }


    async viewController(params, name){
        let _params = Array.from(params)
         return await obtenerAgrupaciones(this.nameColl);
 
    }
}