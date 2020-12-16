import React, { useEffect, createContext, useReducer } from "react";
import { getPopularTVShow, getlatestTVShow } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favoriteTV":
      return {
        tvShows: state.tvShows.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
      };
    case "add-watchListTV":
      return {
        latest: state.latest.map((m) =>
          m.id === action.payload.tv.id ? { ...m, watchList: true } : m
        ),
        tvShows: [...state.tvShows],
      };
    case "load":
      return { tvShows: action.payload.tvShows };
    case "load-upcoming":
      return { latest: action.payload.tvShows, tvShows: [...state.tvShows] };
    default:
      return state;
  }
};

const TVContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], latest: [] });

  const addToFavorites = (tvId) => {
    const index = state.tvShows.map((m) => m.id).indexOf(tvId);
    dispatch({ type: "add-favoriteTV", payload: { tv: state.tvShows[index] } });
  };

  const addToWatchList = (tvId) => {
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
    getlatestTVShow().then((tvShows) => {
      dispatch({ type: "load-upcoming", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TVContext.Provider
      value={{
        tvShows: state.tvShows,
        latest: state.latest,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;