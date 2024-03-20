import { FiveStartRating } from "../FiveStartRating/FiveStartRating";
import s from "./TVShowDetail.module.css"

export function TVShowDetail({tvShow}) {
    console.log(tvShow);
            const rating = tvShow.vote_average /2;
            // console.log(rating);
    return (<div>
            <div className={s.title}> {tvShow.name}</div>
            <div className={s.rating_container}>
            <FiveStartRating rating={rating} />
            </div>
            <div className={s.rating}> {rating} /5</div>
            <div className={s.overview}> {tvShow.overview}</div>
            </div>)
}