import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Loader from './components/Loader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'about',
				element: <About></About>,
			},
			{
				path: 'loader',
				element: <Loader></Loader>,
			},
			{
				path: 'book/:id',
				element: <BookDetails></BookDetails>,
				loader: ({ params }) =>
					fetch(`https://api.itbook.store/1.0/books/${params.id}`),
			},
			{
				path: 'books',
				element: <Books></Books>,
				loader: () => fetch('https://api.itbook.store/1.0/new'),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}></RouterProvider>
);
