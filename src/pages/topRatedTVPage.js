import React, { useContext } from "react";
import TVPageTemplate from '../components/templateTVListPage'
import {TVContext} from '../contexts/tvContext'
import AddToWatchTVButton from '../components/buttons/addToWatchTV'

const TopRatedTV = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(TVContext);
    const tvShows = context.latest.filter((m) => {  // New
        return !("watchListTV" in m);
      });
    return (
        <TVPageTemplate
          name='Top Rated'
            latest={tvShows}  /* Changed */
            action={(tv) => {
                return <AddToWatchTVButton tv={tv} />;
            }}
        />
    );
};

export default TopRatedTV;