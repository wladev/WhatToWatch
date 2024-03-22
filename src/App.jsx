import "./global.css";
import s from "./style.module.css";

import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logo from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";



// TVShowAPI.fetchRecommendations(2261)
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendations, setRecommendations] = useState([]);


  async function searchTVShow(tvShowName) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0])
    }
  }


  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0){
      setCurrentTVShow(populars[9]);
    }

}

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
    setRecommendations(recommendations.slice(0,10))
    }
  }


  useEffect(() => {
    if (currentTVShow) {
    fetchRecommendations(currentTVShow.id)
    }
  }, [currentTVShow])

  useEffect(() => {
      fetchPopulars()     
  }, []);

    return ( <div className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
    <div className={s.header}>
      <div className="row">
        <div className="col-4">
          <div><Logo image={logo} title ="WhatToWatch" substitle = "Find a show you way like" /></div>
        </div>
        <div className="col-md-12 col-lg-4">
        <SearchBar onSubmit={searchTVShow}/>
        </div>
      </div>
    </div>
    <div className={s.tv_show_detail}>{currentTVShow && <TVShowDetail tvShow={currentTVShow} />}</div>
    <div className={s.recommendations}>{recommendations && recommendations.length >0 && <TVShowList tvShowList={recommendations} onClickIetm={setCurrentTVShow}/>}</div>
  </div>
    );
    }