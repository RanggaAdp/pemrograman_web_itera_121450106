// File: src/components/BookForm/index.js
import React, { useState, useContext } from "react";
import { BookContext } from "../../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError("Judul dan penulis wajib diisi.");
      return;
    }
    addBook({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("milik");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Tambah Buku</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full border rounded px-3 py-2 mb-2"
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="block w-full border rounded px-3 py-2 mb-2"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="block w-full border rounded px-3 py-2 mb-2"
      >
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Tambah Buku
      </button>
    </form>
  );
};

export default BookForm;
