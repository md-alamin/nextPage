import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const BookDetails = () => {
	const navigation = useNavigation();
	if (navigation.state === 'loading') {
		return <Loader></Loader>;
	}

	const bookDetails = useLoaderData();
	const [fold, setFold] = useState(true);
	console.log(bookDetails);

	return (
		<div className="my-container flex justify-evenly items-center">
			<img className="flex-1" src={bookDetails.image} alt="" />
			<div className="flex-1">
				<p className="badge">Brand New</p>

				<h1>{bookDetails.title}</h1>

				<div className="my-4">
					<h4>{bookDetails.author}</h4>
					<h4>{bookDetails.publisher}</h4>
					<h4>Year: {bookDetails.year}</h4>
					<h4>Rating: {bookDetails.rating}</h4>
					<h4>Tags: {bookDetails.subtitle}</h4>
				</div>

				{fold ? (
					<>
						<h5 className="w-3/4 text-gray-500 mb-8">
							{bookDetails.desc.substring(0, 100)}...{' '}
							<span
								onClick={() => setFold(false)}
								className="cursor-pointer text-blue-600"
							>
								Read More
							</span>
						</h5>
					</>
				) : (
					<>
						<h5
							onClick={() => setFold(true)}
							className="w-3/4 text-gray-500 mb-8"
						>
							{bookDetails.desc}{' '}
							<span className="cursor-pointer text-blue-600">Show Less</span>
						</h5>
					</>
				)}

				<Link className="btn md:w-auto md:mr-4">
					<div className="inline-flex items-center justify-center w-full h-full">
						<p className="mr-3">Buy Now</p>
					</div>
				</Link>
				<Link className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700 px-6">
					{bookDetails.price}
				</Link>
			</div>
		</div>
	);
};

export default BookDetails;
