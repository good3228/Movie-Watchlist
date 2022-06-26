import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  genres,
  setGenres,
  type,
  setPage,
  setSelectedGenres,
}) => {
  const fetchGenres = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}/?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
    };
  }, []);

  return <div></div>;
};

export default Genres;
