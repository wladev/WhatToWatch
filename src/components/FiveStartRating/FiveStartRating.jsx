import s from "./FiveStartRating.module.css";
import { StarFill, Star as StartEmpty, StarHalf } from "react-bootstrap-icons";


export function FiveStartRating({rating}) {
    const starList = [];

    const starFillCount = Math.floor(rating);
    console.log("rating", starFillCount);

    const hasStarHalf = rating - starFillCount >= 0.5

    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />)
    }
    if (hasStarHalf) {
        starList.push(<StarHalf key={"star-half"} />)
    }
    if (emptyStarCount) {
        starList.push(<StartEmpty key={"star-empty"} />)
    }
    return (
        <div>
          {starList}
        </div>
      );
}