import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./index.css";
import Search from "./pages/Search";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: ":searchParams",
    element: <Search />,
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "movie-detail/:movieId",
    element: <Detail />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
