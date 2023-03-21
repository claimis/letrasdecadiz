import { RiSystemLoaderFill } from 'solid-icons/ri'
import "./loading.css"

function Loading(){
    return (
        <div class="loading-spinner">
            <RiSystemLoaderFill color={"#22abc6"} size={50} />
        </div>
    )
}

export default Loading;