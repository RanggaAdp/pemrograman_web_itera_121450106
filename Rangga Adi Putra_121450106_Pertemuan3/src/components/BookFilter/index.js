import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../../context/BookContext";

const BookFilter = () => {
  const { books, setFilteredBooks } = useContext(BookContext);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let filtered = books;
    if (status !== "all") {
      filtered = filtered.filter((book) => book.status === status);
    }
    if (search.trim()) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredBooks(filtered);
  }, [books, search, status, setFilteredBooks]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-4">
      <input
        type="text"
        placeholder="Cari berdasarkan judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/2"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/4"
      >
        <option value="all">Semua</option>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

export default BookFilter;
