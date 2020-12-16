import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import  TVDetails from "../components/tvDetails";
import TVPageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useTV from "../hooks/useTV";

const MoviePage = props => {
  const { id } = props.match.params;
  const [tv] = useTV(id)  // NEW
  return (
    <>
    {tv ? (
      <>
        <TVPageTemplate tv={tv}>
          <TVDetails tv={tv} />
        </TVPageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews tv={tv} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for TV details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);