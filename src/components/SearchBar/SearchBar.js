import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from 'hooks/useDebounce';

import './styles.scss';

export default function SearchBar(props) {
  const [value, setValue] = useState('');
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className='search'>
      <form className='search__form' onSubmit={(event) => event.preventDefault()}>
        <input
          spellCheck='false'
          placeholder='Search Employee'
          name='search'
          type='text'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='input__form'
        />
      </form>
    </section>
  );
}
