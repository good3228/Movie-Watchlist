import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import { Chip, Stack } from "@mui/material";
import Genres from "../../Components/SingleContent/Genre";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <Genres
        type="Movie"
        setPage={setPage}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setGenres = {setGenres}
        genres={genres}
      />

      <span className="pageTitle">Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
        {numOfPages > 1 && (
          <CustomPagination
            setPage={setPage}
            numOfPages={numOfPages}
          ></CustomPagination>
        )}
      </div>
    </div>
  );
};
export default Movies;
