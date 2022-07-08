import {
  Button,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

export const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState();
  const [content, setContent] = useState();
  const [numOfPage, setnumOfPage] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setnumOfPage(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setPage(1);
  }, [page, type]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBoc"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>

        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          style={{ paddingBottom: 5 }}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab label="Search Movies" style={{ width: "50%" }}></Tab>
          <Tab label="Search TV Series" style={{ width: "50%" }}></Tab>
        </Tabs>

        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No TV Series Found</h2> : <h2>No Movies Found</h2>)}
          {numOfPage > 1 && (
            <CustomPagination
              setPage={setPage}
              numOfPages={numOfPage}
            ></CustomPagination>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
};
export default Search;
