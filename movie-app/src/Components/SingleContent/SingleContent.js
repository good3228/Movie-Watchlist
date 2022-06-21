import React from "react";
import "./SingleContent.css";
import { img_300, unavailable} from "../../config/config";
import { Badge } from "@mui/material";
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
            <Badge badgeContent={vote_average} color={vote_average>7?"primary":"secondary"}></Badge>
            <img className ="poster" src={poster ? `${img_300}/${poster}` : unavailable}></img>
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movies"}
                <span className="date">{date}</span>
            </span>
      </div>
    );
};

export default SingleContent;
