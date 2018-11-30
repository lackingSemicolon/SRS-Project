import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Movie_Info.helpers({
  stuffCollection() {
    return Stuff;
  },
  stuffList() {
    return Stuff.find(FlowRouter.getParam('_id'));
  },
});
