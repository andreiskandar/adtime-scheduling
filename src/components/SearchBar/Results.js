import React from 'react';
import Album from './Album';

export default function results(props) {
  return props.results.map((result) => {
    return <Album key={result.name} {...result} term={props.term} />;
  });
}
