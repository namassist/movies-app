import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {replace: true});
    }, 5000);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
      <img
        className="max-w-md"
        src="/images/not-found.jpg"
        alt="not found page"
      />
      <p>Oops! The page you're looking for doesn't exist. Please check the URL or return to the homepage.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}