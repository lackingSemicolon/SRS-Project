import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Movie } from '../../api/stuff/stuff.js';
import { Meteor } from 'meteor/meteor';

Template.Search_Page.helpers({
  searchList() {
    return Movie.find({ Title: searchParam });
  },
});
