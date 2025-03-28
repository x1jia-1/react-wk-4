import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Books from '../../books.json';
import './book.css';

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = Books.find((b) => b.ID === parseInt(id));
 
  if (!book) {
    return <div>Book not found</div>;
  }
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="book-container">
      <h1 className="book-title">{book.title}</h1>
      <h3 className="book-author">By {book.author}</h3>
      <img className="book-cover" src={book.cover} alt={book.title} />
      <p className="book-summary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.summary}</p>
      <p className="book-details">
        <strong>Price:</strong> ${book.price}
      </p>
      <p className="book-details">
        <strong>Stock:</strong> {book.stock} available
      </p>
      <button className="back-button" onClick={handleBackClick}>
        Back to Home
      </button>
    </div>
  );
};

export default Book;