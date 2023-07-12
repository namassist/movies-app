import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { searchMoviesByTitle } from "../../features/searchSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if(title.length) {
        dispatch(searchMoviesByTitle({ title }));
        navigate(`/search=${title}`, {replace: true});
      }
    }, 500);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeOut)
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, navigate, title]);

  return (
    <header>
      <nav className={`${scrolled || location.pathname.includes("detail") ? "bg-gray-900 shadow-lg" : "bg-transparent"} border-gray-200 dark:bg-gray-900 fixed z-50 top-0 left-0 right-0`}>
        <div className="max-w-screen-xl xl:max-w-6xl flex items-center mx-auto p-5 xl:px-0 gap-x-10">
          <NavLink to="/" 
            className="w-max text-2xl font-semibold text-white flex items-center gap-x-3">
            <i className="fa-solid fa-circle-play text-yellow-500"></i>
            <span className="-mt-1">Movlix</span>
          </NavLink>
          {/* search */}
          <ul className="w-full flex items-center gap-x-5">
            <li className="w-max font-medium">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? "text-yellow-500" : "text-white"}>
              Home
            </NavLink>
            </li>
            <li className="w-max font-medium">
            <NavLink to="/favorites"
              className={({isActive}) => isActive ? "text-yellow-500" : "text-white"}>
              Favorites
            </NavLink>
            </li>
            <li className="w-full flex justify-end">
              <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input 
                    type="text" 
                    id="search-navbar" 
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-400 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </div>
                <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                  <span className="sr-only">Open menu</span>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
