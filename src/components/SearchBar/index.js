import React, { useEffect, useState } from "react";
import axios from "axios";

import Results from "../SearchBar/Results";
import SearchBar from "../SearchBar/SearchBar";

export default function LiveSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const testUrl = `/api/users/${term}`;
    axios.get(testUrl).then((response) => {
      setResults([...response.data]);
    });
  }, [term]);

  return (
    <>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        <Results results={results}  term={term} />
      </main>
    </>
  );
}
