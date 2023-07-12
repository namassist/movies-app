import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <Layout>
      <main className="max-w-6xl mx-auto py-20 px-5">
        <MovieList title="avengers" />
        <MovieList title="transformers" />
      </main>
    </Layout>
  );
};

export default Home;
