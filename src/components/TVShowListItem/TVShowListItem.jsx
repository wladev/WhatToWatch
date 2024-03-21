import s from "./TVShowListItem.module.css"
import {SMALL_IMG_COVER_BASE_URL} from "../../config.js";

export function TVShowListItem({tvShow, onClick}) {

    return (
        <>
        <div className={s.container} onClick={()=> onClick(tvShow)}>
            <img className={s.img} src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} alt="" />
            <div className={s.title}>{tvShow.name}</div>
        </div>
        </>
    )
}