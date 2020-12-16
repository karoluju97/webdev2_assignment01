import React, { useContext } from "react";
import TVPageTemplate from '../components/templateTVListPage'
import {TVContext} from '../contexts/tvContext'
import AddToFavoriteTVButton from '../components/buttons/addToFavoriteTV'

const PopularTV = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(TVContext);
    const tvShows = context.tvShows.filter((m) => {  // New
        return !("favoriteTV" in m);
      });
    return (
        <TVPageTemplate
        name='Popular TV'
            tvShows={tvShows}  /* Changed */
            action={(tv) => {
                return <AddToFavoriteTVButton tv={tv} />;
            }}
        />
    );
};

export default PopularTV;