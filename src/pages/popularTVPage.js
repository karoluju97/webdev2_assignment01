import React, { useContext } from "react";
import TVPageTemplate from '../components/templateTVListPage'
import {TVContext} from '../contexts/tvContext'
import AddToWatchTVButton from '../components/buttons/addToWatchTV'

const PopularTV = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(TVContext);
  const tvShows = context.tvShows.filter(m => m.tvShows)
    return (
        <TVPageTemplate
            title='Popular TV'
            tvShows={tvShows}  /* Changed */
            action={(tv) => {
                return <AddToWatchTVButton tv={tv} />;
            }}
        />
    );
};

export default PopularTV;