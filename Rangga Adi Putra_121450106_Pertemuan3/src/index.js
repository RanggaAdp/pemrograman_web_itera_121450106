// File: src/pages/Home/index.js
import React from "react";
import BookForm from "../../components/BookForm";
import BookFilter from "../../components/BookFilter";
import BookList from "../../components/BookList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manajemen Buku Pribadi</h1>
      <BookForm />
      <BookFilter />
      <BookList />
    </div>
  );
};

export default Home;
