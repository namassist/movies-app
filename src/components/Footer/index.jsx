import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center text-center gap-x-5">
            <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0 flex items-center gap-x-2 text-lg">
              <i className="fa-solid fa-circle-play text-yellow-500"></i>
              <h3 className="font-semibold">Movlix</h3>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto">
              <ul className="flex justify-center sm:justify-end">
                <li className="mr-4">
                  <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                </li>
                <li className="mr-4">
                  <Link to="/favorites" className="text-gray-400 hover:text-white">Favorites</Link>
                </li>
                <li className="mr-4">
                  <Link to="#" className="text-gray-400 hover:text-white">About</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Movlix. All rights reserved.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-400">
            Powered by <a href="http://www.omdbapi.com/" className="text-gray-400 hover:text-white">OMDB API</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
