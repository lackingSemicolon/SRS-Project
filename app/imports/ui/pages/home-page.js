import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Stuff, Movie, Drama, Action, Horror } from '../../api/stuff/stuff.js';

Template.Home_Page.helpers({
  dramaList() {
    return Movie.find({ Genre: 'Drama' }, { limit: 6 });

    // return Drama;
  },
  horrorList() {
    return Movie.find({ Genre: 'Horror' }, { limit: 6 });
  },
  actionList() {
    return Movie.find({ Genre: 'Action' }, { limit: 6 });
  },
  comedyList() {
    return Movie.find({ Genre: 'Comedy' }, { limit: 6 });
  },
  romanceList() {
    return Movie.find({ Genre: 'Romance' }, { limit: 6 });
  },
  trendingList() {
    return Movie.find({}, { limit: 6 });
  },
  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
