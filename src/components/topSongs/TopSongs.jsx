import data from "./data.json"; // importar el archivo JSON con los datos ficticios
import { AiFillFire } from 'solid-icons/ai'
import { FaSolidPencil } from 'solid-icons/fa'
import { AiFillEye } from 'solid-icons/ai'
import "./TopSongs.css"

const TopSongsList = () => {
    return (
      <div className="top-songs-list">
        <h1>Pasodobles Preferidos</h1>
        {data.top_songs.map((song) => (
          <div className="song" key={song.rank}>
            <div className="rank">{song.rank}</div>
            <div className="details">
              <div className="title">{song.title}</div>
              <div className="artist">{song.artist}</div>
              <div className="album">{song.album}</div>
              

            </div>

            <div class="blow-icons">
                <div class="icon-table">    
                    <AiFillFire color ="red" size={24} />
                    <div class="icon-number" style="color: red">32K</div>
                </div>
                <div class="icon-table" title="Visitas" >
                    <AiFillEye  size={23} />
                </div>
                <div class="icon-table" title="Editar">
                    <FaSolidPencil  size={23}/>
                </div>

            </div>

          </div>
        ))}
      </div>
    );
  };
  
  export default TopSongsList;