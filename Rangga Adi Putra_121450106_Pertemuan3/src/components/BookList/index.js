import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

const BookList = () => {
  const { filteredBooks, deleteBook, updateBook } = useContext(BookContext);
  const [editingBookId, setEditingBookId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", author: "", status: "milik" });

  const handleEditClick = (book) => {
    setEditingBookId(book.id);
    setEditForm({ title: book.title, author: book.author, status: book.status });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateBook(editingBookId, editForm);
    setEditingBookId(null);
  };

  if (!filteredBooks || filteredBooks.length === 0) {
    return <p className="text-gray-500">Tidak ada buku yang cocok dengan filter atau pencarian.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Daftar Buku</h2>
      <ul className="space-y-4">
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="border shadow rounded-lg p-4 bg-white hover:shadow-md transition"
          >
            {editingBookId === book.id ? (
              <form onSubmit={handleEditSubmit} className="flex flex-col w-full gap-2">
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  required
                  className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="text"
                  name="author"
                  value={editForm.author}
                  onChange={handleEditChange}
                  required
                  className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <select
                  name="status"
                  value={editForm.status}
                  onChange={handleEditChange}
                  className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="milik">Milik</option>
                  <option value="baca">Baca</option>
                  <option value="beli">Beli</option>
                </select>
                <div className="flex gap-2">
                  <button type="submit" className="text-blue-600 hover:underline">
                    Simpan
                  </button>
                  <button type="button" onClick={() => setEditingBookId(null)} className="text-gray-500 hover:underline">
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-start w-full">
                <div>
                  <p className="font-bold text-lg">{book.title}</p>
                  <p className="text-sm text-gray-700">Penulis: {book.author}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-1 text-white text-xs rounded-full ${
                      book.status === 'milik'
                        ? 'bg-green-500'
                        : book.status === 'baca'
                        ? 'bg-yellow-500'
                        : 'bg-purple-500'
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <button onClick={() => handleEditClick(book)} className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => deleteBook(book.id)} className="text-red-500 hover:underline">
                    Hapus
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
