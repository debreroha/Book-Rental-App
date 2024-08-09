import Head from "next/head";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 
 

export default function Home() {
  // <Head>
  // <title>Book-R</title>
  // </Head>
  const router = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book Rental Application</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}
