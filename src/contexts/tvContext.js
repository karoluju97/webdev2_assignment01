import React, { useEffect, createContext, useReducer } from "react";
import { getTV, getPopularTVShow } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-favoriteTV":
        return {
          tvShow: state.tvShow.map((m) =>
            m.id === action.payload.tv.id ? { ...m, favoriteTV: true } : m
          ),
          latest: [...state.latest],
        };
      case "add-toWatchTV":
        return {
            latest: state.latest.map((m) =>
            m.id === action.payload.tv.id ? { ...m, toWatchTV: true } : m
          ),
          tvShow: [...state.tvShow],
        };
      case "load-tv":
        return { tvShow: action.payload.tvShow, latest: [...state.latest] };
      case "load-latest":
        return { latest: action.payload.tvShow, tvShow: [...state.tvShow] };

      default:
        return state;
    }
  };
  
  const TVContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { tvShow: [], latest: [] });
  
    const addToFavoriteTV = (tvId) => {
      const index = state.tvShow.map((m) => m.id).indexOf(tvId);
      dispatch({ type: "add-favoriteTV", payload: { tv: state.tvShow[index] } });
    };
  
    const addToWatchTV = (tvId) => {
      const index = state.latest.map((m) => m.id).indexOf(tvId);
      dispatch({ type: "add-toWatchTV", payload: { tv: state.latest[index] } });
    };
    
    useEffect(() => {
      getTV().then((tvShow) => {
        dispatch({ type: "load-tv", payload: { tvShow } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      getPopularTVShow().then((tvShow) => {
        dispatch({ type: "load-latest", payload: { tvShow } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <TVContext.Provider
        value={{
            tvShow: state.tvShow,
            latest: state.latest,
            addToFavoriteTV: addToFavoriteTV,
            addToWatchTV: addToWatchTV,
        }}
      >
        {props.children}
      </TVContext.Provider>
    );
  };

export default TVContextProvider;