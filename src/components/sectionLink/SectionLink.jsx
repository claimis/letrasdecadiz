import "./sectionLink.css";

function SectionLink(props) {
    const {colors, namelink, linksection} = {...props}
    const [overcolor, secondcolor] = [...colors]
    
    const goRoute = (linksection) =>{
        window.location.href =  "/verify"
    }

    return(
        <div class="aporte" style={{"background-color": overcolor}}>
            <button
            onClick={goRoute}
            style={{"background-color": secondcolor, "color": overcolor}} 
            class="button-aporte">{namelink}</button>
        </div>
    )
}

export default SectionLink;