# Assignment 1 - ReactJS app.

Name: Karol Uju Amajirionwu

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
+ Feature 1 = Added a page for Upcoming movies,that track movies that are coming out soon 
+ Feature 2 = Added a page for Popular TV, it but doesnt show the details of the TV show when you click on any cards.
+ Feature 3 = Added a page for Top Rated TV, similar to Popular TV, it but doesnt show the details of the TV show when you click on any cards.

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

+ There were no non-standard steps that were taken.

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.
 
+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - get reviews for a specific movie
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies
+ https://api.themoviedb.org/3/tv/popular - get a list of popular tv shows
+ https://api.themoviedb.org/3/tv/top_rated - get a lit of the top rated tv shows

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......
![][storiesUpdated]

  I did not update the Storybook UI, so nothing is different for that page.

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

 + No UI design was changed

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

 + No TV/Movie details was changed or updated.

![][review]
>Shows the full text for a movie review. 

 + No TV/Movie details was changed or updated.

![][favorite]
>Shows the favorited movies. 

![][upcomingMovies]
>Shows page with a list of movies which are coming out soon. 

![][popularTV]
>Shows the popular tv shows.

![][topRatedTV]
>Shows the top rated tv shows. 


## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

 + /movies/favorites (protected) - displays the user's favorite movies selection.
 + /reviews/:id (public) - displays the full text of a movie review.
 + /reviews/form - displays the a form to add to movies selection.
 + /movies/upcoming - displays the upcoming movies selection.
 + /tvs/popular - displays the popular tv shows selection.
 + /tvs/topRated - displays the top rated tv shows selection.
 + /movies/:id - displays the details on a specific movie chosen.
 + / - Returns the user to the homepage


### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

No additional feature was added into the application.
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Karol Uju Amajirionwu

## App Features.

+ Attempted to rework and create various E2E tests to test various aspects of the site
+ Connected project to gitLabs to test cypress

![][cypressDashboard]

+ Feature 3 - Wasn't able to set up code bundling

## Testing.

Cypress Dashboard URL: ... https://dashboard.cypress.io/projects/8gokvw/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

+ There was no advanced learning attempted.

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[storiesUpdated]: ./public/01.PNG
[topRatedTV]:./public/topRated.PNG
[upcomingMovies]: ./public/upcoming.PNG
[popularTV]:./public/popularTV.PNG
[topRatedTV]:./public/topRated.PNG
[favorite]: ./public/favorite.PNG
[cypressDashboard]: ./public/dashboard.PNG

