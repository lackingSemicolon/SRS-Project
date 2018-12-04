import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Movie } from '../../api/stuff/stuff.js';
import { Meteor } from 'meteor/meteor';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Header.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

Template.Header.events({
  'submit form': function (event) {
    event.preventDefault();
    console.log('you clicked the search icon');
    let searchParam = event.target.searchBar.value;
    console.log(searchParam);
    let results;
    /*
    if (Movie.findOne({ Title: searchParam }) !== 0) {
      results = Movie.findOne({ Title: searchParam });
    } else if (Movie.find({ Genre: searchParam }) !== 0) {
      results = Movie.find({ Genre: searchParam });
    } */
    console.log(results);
 //   Meteor.call('searchSubmit', searchParam);

 /*   let results;
    results = Movie.find({ Title: searchParam });
    if (Movie.find({ Title: searchParam }).count() !== 0) {
      results = Movie.find({ Title: searchParam });
    } */
   // console.log(results);
    if (searchParam !== undefined) {
      FlowRouter.go('/search-page');
    }
    event.target.searchBar.value = '';
  },
});
