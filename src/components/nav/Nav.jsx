import "./Nav.css"
function Nav(props) {

  const {backcolor, iconbuild} = props
    console.log(Boolean(iconbuild) )
  const itemNav = ["Gustosines", "cheetos", "triger"]
  return (
    <nav  style={{"background-color": backcolor}}>

        <Show when={ !Boolean(iconbuild)  }>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Explorar</a></li>
            <li><a href="#">Top Canciones</a></li>
            <li><a href="#">Top Artistas</a></li>
            <li><a href="#">Top Letras</a></li>
        </ul >
        </Show  >

        <Show when={ Boolean(iconbuild)  }>
            <div class="based-icon"></div>
        </Show  >

    </nav>

    

  );
}

export default Nav;
