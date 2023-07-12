import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Ratings from "../../components/Ratings";
import Loading from "../../components/Loading";
import FavoritesButton from "../../components/Button/favoritesButton";

const Detail = () => {
  const dispatch = useDispatch();

  const { movieDetails } = useSelector((state) => state.detail);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails({ movieId }));
  }, [dispatch, movieId]);

  if (movieDetails.loading) return <Loading />;

  return (
    <>
      <Header />
      <main className="my-32 max-w-3xl mx-auto rounded-md">
        <div className="flex gap-x-10 flex-col px-5 sm:flex-row">
          <img
            className="min-h-[450px]"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
          <table className="mt-5 sm:mt-0">
            <thead>
              <tr>
                <th colSpan="2">
                  <h4 className="text-xl font-medium text-left">
                    {movieDetails.Title}
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-slate-600">
                <td>Genre:</td>
                <td>{movieDetails.Genre}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Type:</td>
                <td>{movieDetails.Type}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Release:</td>
                <td>{movieDetails.Released}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Ratings:</td>
                <td>
                  <Ratings ratings={movieDetails.imdbRating} />
                </td>
              </tr>
              <tr className="text-slate-600">
                <td>Language:</td>
                <td>{movieDetails.Language}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Country:</td>
                <td>{movieDetails.Country}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Director:</td>
                <td>{movieDetails.Director}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Writer:</td>
                <td>{movieDetails.Writer}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Actors:</td>
                <td>{movieDetails.Actors}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Awards:</td>
                <td>{movieDetails.Awards}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Runtime:</td>
                <td>{movieDetails.Runtime}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 w-11/12 px-5">
          <p className="font-medium text-lg">Plot</p>
          <p className="text-slate-500">{movieDetails.Plot}</p>
        </div>
        <FavoritesButton 
          className="fixed right-5 bottom-5 bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full text-base pt-0.5 md:w-12 md:h-12 md:text-xl md:pt-0 md:right-10 md:bottom-10"
          movie={movieDetails} 
        />
      </main>
      <Footer />
    </>
  );
};

export default Detail;
