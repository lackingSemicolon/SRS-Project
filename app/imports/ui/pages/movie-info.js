import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Movie_Info.helpers({
  getDoc() {
    return Stuff.findOne(FlowRouter.getParam('_id'));
  },
  stuffCollection() {
    return Stuff;
  },
});
