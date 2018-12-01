import { Template } from 'meteor/templating';
import { Stuff, Movie, Drama, Action, Horror } from '../../api/stuff/stuff.js';


Template.Home_Page.helpers({
  dramaList() {
    return Movie.find({}, { sort: { Genre: 'drama' } });
    // return Drama;
  },

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
