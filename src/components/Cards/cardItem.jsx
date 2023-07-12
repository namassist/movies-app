/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import FavoritesButton from "../Button/favoritesButton";

export default function CardItem({ movie }) {
  const location = useLocation();
  
  return (
    <div className="relative">
      <div className="relative">
        <img
          className={`${location.pathname === "/" ? "h-[200px]" : "h-[350px]"} w-full object-cover xl:h-[280px]`}
          src={movie.Poster}
          alt={movie.Title}
        />
        <Link
          to={`/movie-detail/${movie.imdbID}`}
          className="absolute block top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)]">
        </Link>
      </div>
      <span 
        className="bg-yellow-500 px-2 py-1 text-xs rounded-md absolute top-3 left-3 font-medium text-slate-800">
        {movie.Type}
      </span>
      <div className="mt-3">
        <h4 
          className="text-base font-medium mb-1">
          {movie.Title}
        </h4>
        <p className="text-slate-500 text-sm">
          {movie.Year}
        </p>
      </div>
      <FavoritesButton 
        className="absolute top-3 right-3 text-xl"
        movie={movie}
      />
    </div>
  );
}