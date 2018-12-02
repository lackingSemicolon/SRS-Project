import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff, Movie } from '../../api/stuff/stuff.js';
import { Meteor } from 'meteor/meteor';

Template.Movie_Info.helpers({
  stuffCollection() {
    return Movie;
  },

  movieList() {
    return Movie.find(FlowRouter.getParam('_id'));
  },
});

Template.Movie_Info.events({
  'click #rentButton': function (event) {
    //   event.preventDefault();
    console.log('you clicked the rentButton');
    //   console.log(Stuff.findOne('Quantity'));
    let currentID = Movie.findOne(FlowRouter.getParam('_id'));
    let currentQuantity = currentID.Quantity;
    console.log(currentID);
    console.log(currentQuantity);
    Meteor.call('quantUpdate', currentQuantity - 1);
  },
});
