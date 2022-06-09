import React from "react";
import "./SingleContent.css";
import { img_300, unavailable} from "../../config/config";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
    return (
      <div className="media">
            <img className ="poster" src={poster ? `${img_300}/${poster}` : unavailable}></img>
            <b className="title">{title}</b>
            <span className="sunTitle">
                {media_type === "tv" ? "TV Series" : "Movies"}
                <span className="date">{date}</span>
            </span>
      </div>
    );
};

export default SingleContent;
