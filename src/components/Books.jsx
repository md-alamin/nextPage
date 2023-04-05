import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import MyBook from './MyBook';
import Loader from './Loader';

const Books = () => {
	const navigation = useNavigation();
	if (navigation.state === 'loading') {
		return <Loader></Loader>;
	}

	const { books } = useLoaderData();

	return (
		<div className="my-container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{books.map((book) => (
				<MyBook key={book.isbn13} book={book}></MyBook>
			))}
		</div>
	);
};

export default Books;
