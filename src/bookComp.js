import React from 'react'

const Book = (properties) => {
    const {title, author, job, publisher} = properties;
    // attribute for the event, eventHandler 
    // onClick, onMouseOver
    const clickHandler = () => {
      alert('hello world');
    }
    return (
      <article>
        <h1> {title}</h1>
        <h4>{author}</h4>
        <p>{job}</p>
        <p>{publisher}</p>
        <button type="button" onClick={clickHandler}> Reference Example</button>
      </article>
    )
  };

export default Book;
