import logo from './logo.svg';
import styles from './App.module.css';
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home";
import { Router, Routes, Route, Link } from "solid-app-router";
import { lazy } from "solid-js";



function App() {

  const Veri = lazy(() => import("./components/verify/Verify"));
  const _Home = lazy(() => import("./components/home/Home"));
  return (
    <div class={styles.App}>
      <Nav backcolor="white" iconbuild="true" />
      <Nav backcolor="black" />
    
      <Router>
          <Routes>
            <Route path="/" element={<_Home/>} />
            <Route path="/verify" element={<Veri/>} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
