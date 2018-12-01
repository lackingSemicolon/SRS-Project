import { Template } from 'meteor/templating';
import { Stuff, Movie, Drama, Action, Horror } from '../../api/stuff/stuff.js';


Template.Home_Page.helpers({
  dramaList() {
    return Movie.find({}, { sort: { Genre: 'drama' } });
    // return Drama;
  },
  horrorList() {
    return Movie.find({ Genre: 'Horror' });
  },
  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
