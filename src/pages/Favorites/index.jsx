import { useSelector } from "react-redux";
import Cards from "../../components/Cards";
import EmptyDataMessages from "../../components/Messages";
import Layout from "../../components/Layout";

export default function Favorites() {
  const { favoriteMovies } = useSelector((state) => state.favorites)

  return (
    <Layout>
      <main className="w-full my-20 px-5 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="mb-5 text-xl capitalize font-medium">Favorites Movies</h2>
        {favoriteMovies.length ?
          <Cards
            className="grid grid-cols justify-center sm:grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
            movies={favoriteMovies} 
          /> :
          <EmptyDataMessages />
        }
      </main>
    </Layout>
  );
}