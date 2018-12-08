import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Stuff, Movie } from '../../api/stuff/stuff.js';

Template.Home_Page.helpers({
  dramaList() { // returns list of 6 movies sorted by genre: drama
    return Movie.find({ Genre: 'Drama' }, { limit: 6 });
  },
  horrorList() { // returns list of 6 movies sorted by genre: horror
    return Movie.find({ Genre: 'Horror' }, { limit: 6 });
  },
  actionList() { // returns list of 6 movies sorted by genre: action
    return Movie.find({ Genre: 'Action' }, { limit: 6 });
  },
  comedyList() { // returns list of 6 movies sorted by genre: comedy
    return Movie.find({ Genre: 'Comedy' }, { limit: 6 });
  },
  romanceList() { // returns list of 6 movies sorted by genre: romance
    return Movie.find({ Genre: 'Romance' }, { limit: 6 });
  },
  trendingList() { // returns list of 6 movies
    return Movie.find({}, { limit: 6 });
  },
  highestRatedList() { // returns list of 6 movies sorted by imdbRating thats greater than 8.0
    return Movie.find({ imdbRating: { $gt: 7.9 } }, { limit: 6 });
  },
});

$('img')
    .popup({
      on: 'focus'
    });