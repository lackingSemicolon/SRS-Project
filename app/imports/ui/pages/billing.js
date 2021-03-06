import { Meteor } from 'meteor/meteor';
import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Billing, Movie } from '../../api/stuff/stuff';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStuffForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      //     console.log('you clicked the submit button');
      const currentID = Movie.findOne(FlowRouter.getParam('_id'));
      const currentQuantity = currentID.Quantity - 1;
      const id = currentID._id;
      console.log(currentID);
      console.log(id);
      Meteor.call('quantUpdate', { id, currentQuantity });
      FlowRouter.go('Home_Page');
    },
  },
});

Template.Billing_Page.helpers({
  stuffCollection() {
    return Billing;
  },
});

Template.Billing_Page.events({
  'click #cancel': function (event) {
    FlowRouter.go('Home_Page');
  },
});
