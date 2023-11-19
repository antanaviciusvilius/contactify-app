import { useRouteError } from "react-router-dom";
import './ErrorPage.scss';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          { (error as Error)?.message 
            || (error as { statusText?: string })?.statusText
          }
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;