import "./panel-verify.css"
import { createSignal } from 'solid-js';

let windowHeigthScreen = window.innerHeight;


function PanelVerify () {
    const heightPanel = 100
    const [controlVfy, setControlVfy] = createSignal(true);
    console.log(windowHeigthScreen, " the height")
    console.log( window.outerHeight)
    return (
    <div class="panel-verify" style= {
        {
            top: (windowHeigthScreen - heightPanel -20)+"px", 
            height: heightPanel+"px",
            
        }
        }>
        <div class="box-panel-verify">
            <div class="parent-button verify-button"style="display:flex; flex-direction:row; align-items:center">
                <button style={`background-color: #58b75b`}>Verificar</button>
                <button style={`background-color: red`}>Cancelar</button>
            </div>

        </div>
    </div>
    )
}

export default  PanelVerify ;