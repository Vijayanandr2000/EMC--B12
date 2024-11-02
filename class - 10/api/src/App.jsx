import { useEffect, useState } from "react";
import axios from "axios";

import CountryCard from "./components/CountryCard";
import Pagination from "./components/Pagination";
import { convertCountryDTO } from "./dto/convertCountryDTO";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    //callback hell - es5
    // fetch("https://restcountries.com/v3.1/all")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("vijay :", res);
    //   })
    //   .catch((err) => {
    //     console.error("Something went wrong!", err);
    //   });

    //IIFE
    // (async () => {
    //   const response = await fetch("https://restcountries.com/v3.1/all");
    //   const resData = await response.json();

    //   console.log("vijay :", resData);
    // })();

    // [
    //   {
    //     name:,
    //     img:,
    //     population,
    //     region;,
    //     capital
    //   }
    // ]

    (async () => {
      const response = await axios("https://restcountries.com/v3.1/all");
      // const resData = await response.json();

      const rawData = response.data;

      const countriesData = convertCountryDTO(rawData);

      countriesData.sort((a, b) => a.name.localeCompare(b.name));

      setCountries(countriesData);
    })();
  }, []);

  const lastIdx = currPage * itemsPerPage;
  const startIdx = lastIdx - itemsPerPage;

  const paginatedCountries = countries.slice(startIdx, lastIdx);

  const paginate = (pageNum) => setCurrPage(pageNum);

  const totalPage = Math.ceil(countries.length / itemsPerPage);

  return (
    <div className="App">
      <h1>Country Card</h1>

      <div className="country-grid">
        {paginatedCountries.map((country) => {
          const { name, flag, population, region, capital } = country;
          return (
            <CountryCard
              name={name}
              flag={flag}
              population={population}
              region={region}
              capital={capital}
            />
          );
        })}
      </div>

      <Pagination
        totalPage={totalPage}
        currPage={currPage}
        paginate={paginate}
      />
    </div>
  );
}
export default App;

// [1, 2, 3, 4, 5, 6, 7, 8];

// 2

// 1 2 -> 1 * 2 = 0, 2 -1

// 3 4 -> 2 * 2 = prev, 4-1

// 5 6 -> 3 = prev,6 -1

// 7 8 -> 4 = prev,8-1
