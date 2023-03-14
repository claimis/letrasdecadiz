import logo from './logo.svg';
import styles from './App.module.css';
import Nav from "./components/nav/Nav"
import Banner from "./components/banner/Banner"
import TopSongsList from './components/topSongs/TopSongs';
import Aporte from './components/aporte/Aporte';
function App() {
  return (
    <div class={styles.App}>
      <Nav backcolor="white" iconbuild="true" />
      <Nav backcolor="black" />

      <div class="parent-App">
        <Banner/>
        <TopSongsList />
        <Aporte  />
      </div>
    </div>
  );
}

export default App;
