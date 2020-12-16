import React, { useEffect, createContext, useReducer } from "react";
import { getPopularTVShow, getTopRatedTVShow } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favoriteTV":
      return {
        tvShows: state.tvShows.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favoriteTV: true } : m
        ),
        latest: [...state.latest],
      };
    case "add-watchListTV":
      return {
        latest: state.latest.map((m) =>
          m.id === action.payload.tv.id ? { ...m, watchListTV: true } : m
        ),
        tvShows: [...state.tvShows],
      };
    case "load":
      return { tvShows: action.payload.tvShows, latest: [...state.latest] };
    case "load-upcoming":
      return { latest: action.payload.tvShows, tvShows: [...state.tvShows] };
    default:
      return state;
  }
};

const TVContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], latest: [] });

  const addToFavoriteTV = (tvId) => {
    const index = state.tvShows.map((m) => m.id).indexOf(tvId);
    dispatch({ type: "add-favoriteTV", payload: { tv: state.tvShows[index] } });
  };

  const addToWatchListTV = (tvId) => {
    const index = state.latest.map((m) => m.id).indexOf(tvId);
    dispatch({ type: "add-watchListTV", payload: { tv: state.latest[index] } });
  };

  useEffect(() => {
    getPopularTVShow().then((tvShows) => {
      dispatch({ type: "load", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedTVShow().then((tvShows) => {
      dispatch({ type: "load-upcoming", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TVContext.Provider
      value={{
        tvShows: state.tvShows,
        latest: state.latest,
        addToFavoriteTV: addToFavoriteTV,
        addToWatchListTV: addToWatchListTV
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;