import Controller from "../Controller.js";

export default class agrupacionesController extends Controller {

    agrupaciones_petitions = [1,2,3]
    constructor(_agrupaciones_petitions) {

        super();
        this.agrupaciones_petitions = _agrupaciones_petitions;

    }
} 