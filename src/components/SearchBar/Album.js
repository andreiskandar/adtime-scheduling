import React from 'react';
import classnames from 'classnames';

export default function Album(props) {
  const alubumInfoClass = classnames('name', {
    name: props.name === props,
  });

  if (props.term !== props.name) {
    return <div></div>;
  } else {
    return (
      <article className='albumselected'>
        <h1> WINNEER CHICKEN DINNER</h1>
        <div className={alubumInfoClass}>
          <div className='album__artist'>{props.term}</div>
        </div>
      </article>
    );
  }
}
