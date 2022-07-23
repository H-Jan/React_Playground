import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//Set Up variables

const firstBook = {
  author: 'Amelia Airheart',
  title: 'I love You to the moon and back',
  publisher: 'Penguin House Publishing',
  job:'Writer'
}

const secondBook = {
  author: 'F Scott Fitz',
  title: 'Summers Paradise',
  publisher: 'Penguin House Publishing',
  job:'Artist'
}

function BookList(){
  return (
    <section className='booklist'>
    <Book title={firstBook.title} author={firstBook.author}>
      <p> Lorem ipsum dolor sit amet whatever yadadadada</p>
    </Book>
    <Book title={secondBook.title} author={secondBook.author} publisher={secondBook.publisher}/>
    <Book/>
    <Book/>
    </section>
  ); 
}

const Book = ({title, author, publisher, job, children}) => {
  // const {img, title, author} = properties;
  return (
    <article>
      <h1> {title}</h1>
      <h4>{author}</h4>
      <p>{job}</p>
      <p>{publisher}</p>
      {children}
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));