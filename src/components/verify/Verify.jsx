import "./verify.css"
import Header from "../../shared/components/header/Header";
import agrupacionesController from "../../external/service/api/agrupaciones/agrupacionesController.js";


function Verify () {
    const ag = new agrupacionesController();
    ag.getController();

    
    return (
    <div class="class-verify">
        <Header />
        <div>hola</div>

    </div>
    )
}

export default Verify;