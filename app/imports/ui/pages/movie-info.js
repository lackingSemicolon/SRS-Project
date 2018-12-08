import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Movie } from '../../api/stuff/stuff.js';
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
    event.preventDefault();
    console.log('you clicked the rentButton');
    //   console.log(Stuff.findOne('Quantity'));
    let currentID = Movie.findOne(FlowRouter.getParam('_id'));
    let currentQuantity = currentID.Quantity - 1;
    let id = currentID._id;
    console.log(currentID);
    console.log(id);
//    console.log(currentQuantity);
    Meteor.call('quantUpdate', { id, currentQuantity });
    FlowRouter.go('Billing_Page');
  },
});
