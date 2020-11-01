import React, { useState } from 'react';
import Album from './Album';
import SearchBar from '../SearchBar/SearchBar';

export default function results(props) {
  return props.results.map((result) => {
    return <Album key={result.name} {...result} term={props.term} />;
  });
}
