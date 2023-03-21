import "./header.css";

function Header( props ) {
    const {headerd} = props
    const [hdata]= headerd
    const autores = hdata["autor/es"];
    const anio = hdata["año"];

    
    return(
        <div class="header">
            <h3>{ autores }</h3>
            <h5>{ anio }</h5>
        </div>
    )
    }

export default Header;