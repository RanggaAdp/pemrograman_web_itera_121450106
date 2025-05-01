from abc import ABC, abstractmethod

class LibraryItem(ABC):
    """
    Kelas abstrak untuk merepresentasikan item perpustakaan.
    Kelas ini mendefinisikan atribut dan method umum untuk semua item perpustakaan.
    """
    def __init__(self, item_id, title):
        """
        Konstruktor untuk LibraryItem.

        Args:
            item_id (str): ID unik untuk item.
            title (str): Judul item.
        """
        self._item_id = item_id  # Protected attribute
        self.title = title      # Public attribute
        self._is_borrowed = False # Protected attribute

    @property
    def item_id(self):
        """
        Property untuk mengakses ID item.
        """
        return self._item_id

    def borrow(self):
        """
        Method untuk menandai item sebagai dipinjam.
        """
        if not self._is_borrowed:
            self._is_borrowed = True
            print(f"Item '{self.title}' (ID: {self._item_id}) berhasil dipinjam.")
        else:
            print(f"Item '{self.title}' (ID: {self._item_id}) sedang tidak tersedia.")

    def return_item(self):
        """
        Method untuk menandai item sebagai dikembalikan.
        """
        if self._is_borrowed:
            self._is_borrowed = False
            print(f"Item '{self.title}' (ID: {self._item_id}) berhasil dikembalikan.")
        else:
            print(f"Item '{self.title}' (ID: {self._item_id}) tidak sedang dipinjam.")

    @abstractmethod
    def display_details(self):
        """
        Method abstrak untuk menampilkan detail spesifik item.
        Method ini harus diimplementasikan oleh subclass.
        """
        pass

class Book(LibraryItem):
    """
    Kelas untuk merepresentasikan buku.
    Mewarisi dari LibraryItem dan menambahkan atribut spesifik untuk buku.
    """
    def __init__(self, item_id, title, author, num_pages):
        """
        Konstruktor untuk Book.

        Args:
            item_id (str): ID unik buku.
            title (str): Judul buku.
            author (str): Penulis buku.
            num_pages (int): Jumlah halaman buku.
        """
        super().__init__(item_id, title)
        self.author = author
        self._num_pages = num_pages # Protected attribute

    def display_details(self):
        """
        Mengimplementasikan method abstrak dari LibraryItem untuk menampilkan detail buku.
        """
        return f"Buku: {self.title} (ID: {self.item_id}), Penulis: {self.author}, Jumlah Halaman: {self._num_pages}, {'Dipinjam' if self._is_borrowed else 'Tersedia'}"

class Magazine(LibraryItem):
    """
    Kelas untuk merepresentasikan majalah.
    Mewarisi dari LibraryItem dan menambahkan atribut spesifik untuk majalah.
    """
    def __init__(self, item_id, title, issue):
        """
        Konstruktor untuk Magazine.

        Args:
            item_id (str): ID unik majalah.
            title (str): Judul majalah.
            issue (str): Nomor/edisi majalah.
        """
        super().__init__(item_id, title)
        self.issue = issue
        self.__publisher = "Penerbit Majalah" # Private attribute (encapsulation)

    def display_details(self):
        """
        Mengimplementasikan method abstrak dari LibraryItem untuk menampilkan detail majalah.
        """
        return f"Majalah: {self.title} (ID: {self.item_id}), Edisi: {self.issue}, {'Dipinjam' if self._is_borrowed else 'Tersedia'}"

    def get_publisher_info(self):
        """
        Method untuk mengakses informasi penerbit (contoh akses ke private attribute).
        """
        return self.__publisher

class Library:
    """
    Kelas untuk mengelola koleksi item perpustakaan.
    """
    def __init__(self):
        """
        Konstruktor untuk Library.
        Menginisialisasi koleksi item perpustakaan sebagai list kosong.
        """
        self._items = [] # Protected attribute

    def add_item(self, item):
        """
        Method untuk menambahkan item ke perpustakaan.

        Args:
            item (LibraryItem): Item perpustakaan yang akan ditambahkan.
        """
        if isinstance(item, LibraryItem):
            self._items.append(item)
            print(f"Item '{item.title}' (ID: {item.item_id}) berhasil ditambahkan ke perpustakaan.")
        else:
            print("Item yang ditambahkan harus merupakan instance dari LibraryItem atau subclass-nya.")

    def display_available_items(self):
        """
        Method untuk menampilkan daftar item yang tersedia di perpustakaan.
        """
        print("\nDaftar Item Tersedia:")
        if not self._items:
            print("Perpustakaan kosong.")
            return
        for item in self._items:
            if not item._is_borrowed:
                print(item.display_details())

    def search_item(self, query):
        """
        Method untuk mencari item berdasarkan judul atau ID.

        Args:
            query (str): Kata kunci pencarian (judul atau ID).
        """
        results = []
        for item in self._items:
            if query.lower() in item.title.lower() or query == item.item_id:
                results.append(item.display_details())

        if results:
            print(f"\nHasil Pencarian untuk '{query}':")
            for result in results:
                print(result)
        else:
            print(f"Tidak ada item dengan judul atau ID '{query}'.")

# Contoh Penggunaan
if __name__ == "__main__":
    library = Library()

    # Membuat instance item perpustakaan
    book1 = Book("B001", "Harry Potter dan Batu Bertuah", "J.K. Rowling", 320)
    book2 = Book("B002", "Laskar Pelangi", "Andrea Hirata", 400)
    magazine1 = Magazine("M001", "National Geographic", "Edisi Mei 2024")
    magazine2 = Magazine("M002", "Time", "Vol. 200, No. 1")

    # Menambahkan item ke perpustakaan
    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)

    # Menampilkan daftar item yang tersedia
    library.display_available_items()

    # Meminjam buku
    book1.borrow()
    library.display_available_items()

    # Mencari item
    library.search_item("Harry")
    library.search_item("M002")
    library.search_item("B003") # Tidak ditemukan

    # Mengembalikan buku
    book1.return_item()
    library.display_available_items()

    # Mengakses informasi penerbit majalah (contoh encapsulation)
    print(f"\nInformasi Penerbit Majalah '{magazine1.title}': {magazine1.get_publisher_info()}")

    # Mengakses ID buku menggunakan property
    print(f"ID Buku '{book1.title}': {book1.item_id}")