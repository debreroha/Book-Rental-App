import MaterialReactTable from 'material-react-table';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the server
    axios.get('/api/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <MaterialReactTable
      columns={[
        { accessor: 'title', Header: 'Title' },
        { accessor: 'author', Header: 'Author' },
        { accessor: 'category', Header: 'Category' },
        { accessor: 'quantity', Header: 'Quantity' },
        { accessor: 'available', Header: 'Available' },
      ]}
      data={books}
    />
  );
};

export {BookTable}