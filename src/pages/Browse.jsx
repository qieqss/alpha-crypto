import React from "react";
import { Search } from "@mui/icons-material";
import Nav from "../components/Nav";
import axios from "axios";

const Browse = () => {
  const [tokens, setTokens] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/v3/search?query=bitcoin")
      .then(({ data }) => {
        setTokens(data.coins);
      })
      .catch((err) => {
        alert(err.message);
      });
  });

  return (
    <>
      <section id="browse">
        <Nav />
        <div className="row">
          <header>
            <h1>Browse our Tokens</h1>
            <div className="browser--wrapper">
              <input type="text" placeholder="Search by name" />
              <figure>
                <Search fontSize="large" />
              </figure>
            </div>
          </header>
        </div>
      </section>

      <section id="tokens">
        <div className="container">
          <div className="row">
            <h2 className="search__info">
              Search results for <span className="orange">""</span>
            </h2>
            <div className="tokens">
              <div className="token"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
