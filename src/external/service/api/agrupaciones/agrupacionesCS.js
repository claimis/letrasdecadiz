import Controller from "../Controller.js";

export default class agrupacionesCS extends Controller {

    constructor() {

        super();
        this.setNameColl = "agrupaciones";


    }


    getAgrupaciones(name, params){
       return this.viewController.call(this, arguments, name )
    }
} 