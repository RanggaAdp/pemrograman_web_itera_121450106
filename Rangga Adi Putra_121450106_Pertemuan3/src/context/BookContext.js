// File: src/context/BookContext.js
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  const [filteredBooks, setFilteredBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    const newBooks = [...books, { ...book, id: Date.now() }];
    setBooks(newBooks);
    setFilteredBooks(newBooks);
  };

  const updateBook = (id, updatedBook) => {
    const updated = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );
    setBooks(updated);
    setFilteredBooks(updated);
  };

  const deleteBook = (id) => {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
    setFilteredBooks(updated);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        filteredBooks,
        setFilteredBooks,
        addBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
