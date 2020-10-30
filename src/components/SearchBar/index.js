import React, { useEffect, useState } from "react";
import axios from "axios";

import Results from "../SearchBar/Results";
import SearchBar from "../SearchBar/SearchBar";

export default function LiveSearch(props) {

  useEffect(() => {
    const testUrl = `/api/users/${props.term}`;
    axios.get(testUrl).then((response) => {
      props.setResults([...response.data]);
    });
  }, [props.term]);

  return (
    <>
      <main>
        <SearchBar onSearch={(term) => props.setTerm(term)} />
        <Results results={props.results}  term={props.term} />
      </main>
    </>
  );
}
