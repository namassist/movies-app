/* eslint-disable react/prop-types */
import Hero from "../Hero"
import Footer from "../Footer";
import Header from "../Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      {children}
      <Footer />
    </>
  );
}