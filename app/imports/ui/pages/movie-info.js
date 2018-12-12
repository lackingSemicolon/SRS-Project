import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Movie } from '../../api/stuff/stuff.js';


Template.Movie_Info.helpers({
  stuffCollection() {
    return Movie;
  },

  movieList() {
    return Movie.find(FlowRouter.getParam('_id'));
  },
});

Template.Movie_Info.events({

});
