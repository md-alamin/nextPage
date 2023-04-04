import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyBook from './MyBook';

const Books = () => {
	const { books } = useLoaderData();
	return (
		<div className="my-container">
			{books.map((book) => (
				<MyBook key={book.isbn13} book={book}></MyBook>
			))}
		</div>
	);
};

export default Books;
