import Banner from "../banner/Banner"
import TopSongsList from '../topSongs/TopSongs';
import SectionLink from '../sectionLink/SectionLink';


function Home () {

    return (
    <div class="class-home">

        
      <div class="parent-home">
        <Banner/>
        <TopSongsList />
        <SectionLink namelink={"Aporta letrillas"} colors={["black", "white"]}/>
        <SectionLink namelink={"Aporta letrillas 2"} colors={["white", "black"]} />
      </div>


    </div> 
    )
}

export default Home;