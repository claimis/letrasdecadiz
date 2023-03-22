import Controller from "../Controller.js";

export default class AgrupacionesCS extends Controller {

    constructor() {

        super();
        this.setNameColl = "agrupaciones";


    }


    getAgrupaciones(params){
       return this.viewController.call(this, arguments, params )
    }
} 