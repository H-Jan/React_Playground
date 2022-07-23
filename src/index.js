import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//Set Up variables
// set up variables as an array

const books = [
  {
    id: 1,
    author: 'Amelia Airheart',
    title: 'I love You to the moon and back',
    publisher: 'Penguin House Publishing',
    job:'Writer'
  }, 
  {
    id: 2,
    author: 'F Scott Fitz',
    title: 'Summers Paradise',
    publisher: 'Penguin House Publishing',
    job: 'Artist'
  }
];

function BookList(){
  return (
    <section className='booklist'>{books.map((book) => {
      return (
        <Book key={book.id} {...book}>
        </Book>
      )
    })}
    </section> 
  ); 
}

const Book = (properties) => {
  const {title, author, job, publisher} = properties;
  // attribute, eventHandler
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
}


ReactDom.render(<BookList/>, document.getElementById('root'));