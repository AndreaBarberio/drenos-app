import { useState } from "react";
import { Link } from "react-router-dom";
import bg404 from '../../assets/drenos/404.png';

export default function NotFound() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg404})` }}
    >
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white text-black p-8 rounded-xl shadow-lg max-w-md w-full">
            {/* X di chiusura */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
            >
              <span>X</span>
            </button>

            {/* Contenuto modale */}
            <h1 className="text-3xl font-bold mb-4 text-center">404 - Page not found</h1>
            <p className="text-center text-gray-700 mb-6">
              This page has vanished… or perhaps it was never here at all.          </p>

            {/* Bottone per tornare alla Home */}
            <div className="flex justify-center">
              <Link
                to="/"
                className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
