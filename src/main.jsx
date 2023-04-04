import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Books from './components/Books';

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
				path: 'books',
				element: <Books></Books>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}></RouterProvider>
);
