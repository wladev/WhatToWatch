import s from "./TVShowDetail.module.css"
export function TVShowDetail({tvShow}) {
    console.log(tvShow);
    return (<div>
            <div className={s.rating}> {tvShow.name}</div>
            <div className={s.rating}> {tvShow.overview}</div>
            <div className={s.rating}> {tvShow.vote_average /2}</div>
            </div>)
}