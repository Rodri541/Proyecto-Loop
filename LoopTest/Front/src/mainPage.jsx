import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./config.js";
import image from "./img/loopImagen.png";
import "./mainPage.css";

const MainPage = () => {
  const [form, setForm] = useState({ name: "", email: "", country: "" });
  const [countriesList, setCountriesList] = useState([]);
  const [topCountries, setTopCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const fetchTopCountries = async () => {
    try {
      const getCountries = axios.get(`${API_URL}/countries`);
      const getTopVotes = axios.get(`${API_URL}/top-countries`);

      const [countriesResponse, votesResponse] = await Promise.all([
        getCountries,
        getTopVotes
      ]);

      const countries = countriesResponse.data;
      const topVotes = votesResponse.data;

      setCountriesList(countries);

      const topCountries = topVotes.map(vote => {
        const countryDetails = countries.find(
          country => country.name.toLowerCase() === vote.Country.toLowerCase()
        );

        return {
          Country: vote.Country,
          Votes: vote.votes,
          CapitalCity: countryDetails?.capital || "No data",
          Region: countryDetails?.region || "No data",
          SubRegion: countryDetails?.subregion || "No data"
        };
      });

      setTopCountries(topCountries);

    } catch (error) {
      console.error("No pudimos cargar los países:", error);
    }
  };

  useEffect(() => {
    fetchTopCountries();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") setEmailError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/votes`, form);
      setForm({ name: "", email: "", country: "" });
      fetchTopCountries();
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 2000);
    } catch (error) {
      setEmailError("Invalid Email");
    }
  };

  const filteredCountries = topCountries.filter((c) =>
    Object.values(c)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="header-bar">
        <img src={image} alt="Loopstudio logo" className="logo" />
        <span className="header-title">| Frontend Developer Challenge</span>
      </div>

      <div className="main-container">
        <div className="vote-form-label-wrapper">
          <span className="vote-form-label">Vote your Favourite Country</span>
        </div>

        {successMessage ? (
          <div className="success-inline">
            <span className="tick">✔</span>
            Your vote was successfully submitted
          </div>
        ) : (
          <form className="vote-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required />
            </div>

            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className={emailError ? "error" : ""} />
              {emailError && <div className="error-text">Invalid email</div>}
            </div>

            <div className="form-field">
              <input
                list="countries"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                required
                autoComplete="off" />
              <datalist id="countries">
                {countriesList.map((c, i) => (
                  <option key={i} value={c.name} />
                ))}
              </datalist>
            </div>

            <button type="submit">Submit Vote</button>
          </form>
        )}

        <h2 className="title">Top 10 Most Voted Countries</h2>

        <input
          className="search-bar"
          type="text"
          placeholder="Search Country, Capital City, Region or Subregion"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <table className="votes-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital City</th>
              <th>Region</th>
              <th>Sub Region</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.CapitalCity}</td>
                <td>{item.Region}</td>
                <td>{item.SubRegion}</td>
                <td>{item.Votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPage;