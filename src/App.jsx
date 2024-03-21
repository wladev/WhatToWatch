import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logo from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";


// TVShowAPI.fetchPopulars()
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0){
      setCurrentTVShow(populars[12]);
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, []);
  console.log(currentTVShow);
    return ( <div className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
    <div className={s.header}>
      <div className="row">
        <div className="col-4">
          <div><Logo image={logo} title ="Watowatch" substitle = "Find a show you way like" /></div>
        </div>
        <div className="col-md-12 col-lg-4"><input type="text"/></div>
      </div>
    </div>
    <div className={s.tv_show_detail}>{currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}</div>
    <div className={s.recommentations}>Recommendations</div>
  </div>
    );
  }