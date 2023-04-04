import React from 'react';

const MyBook = ({ book }) => {
	console.log(book);
	return (
		<div>
			<img src={book.image} alt="" />
			<h1>{book.title}</h1>
		</div>
	);
};

export default MyBook;
