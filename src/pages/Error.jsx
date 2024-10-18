import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Ooops... Item Not Found</h2>
        <p className="mt-2 text-gray-600">
          The item you are looking for might have been removed or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
