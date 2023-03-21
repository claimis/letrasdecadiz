import "./verify.css"
import Header from "../../shared/components/header/Header";
import agrupacionesCS from "../../external/service/api/agrupaciones/agrupacionesCS.js";
import { createSignal } from 'solid-js';
import Loading from "../../shared/components/loading/Loading";
import { Show } from 'solid-js/web';
import  PanelVerify from "./components/panel-verify/PanelVerify" ;

const _agrp = new agrupacionesCS()

function Verify () {

    _agrp.getAgrupaciones("d", 2,3).then((d) => {
        console.log(d)
        setData(d);
        setIsLoading(false);
    })

    const [isLoading, setIsLoading] = createSignal(true);
    const [data, setData] = createSignal([])

    return (
    <div class="class-verify">

        <Show when={isLoading()}>
            <div style={`display: flex; justify-content: center; margin-top:200px`}>
                <Loading  />
            </div>
        </Show>

        <Show when={!isLoading()}>
            <Header headerd={data()}/>
            <div style={`display: flex; justify-content: center;`}>
                {data().map((song) => (
            <div className="data-lyric" key={song.id}>

                <div class="verify-title-lyric">
                    <h2>{song.nombre_agrupacion}</h2>
                </div>

                <div class="parent-verify-lyrics">
                {song.letra.map((ltr, inx) => ( 
                    <div key={inx} class="verify-line-lyric">
                        <span>{ltr}</span>
                    </div>
                
                ))}
                </div>

            </div>
            ))}



            </div>
            
            < PanelVerify />
        <div>

        </div>
        </Show>
    </div>
    )
}

export default Verify;