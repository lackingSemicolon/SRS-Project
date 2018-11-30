import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  Title: {
    label: 'Title',
    type: String,
    max: 100,
    autoform: {
      group: 'Stuff',
    },
  },
  Poster: {
    label: 'Poster',
    type: String,
    max: 250,
    autoform: {
      group: 'Stuff',
    },
  },
  HomePoster: {
    label: 'HomePoster',
    type: String,
    max: 250,
    autoform: {
      group: 'Stuff',
    },
  },
  Quantity: {
    label: "Available",
    type: Number,
    autoform: {
      group: 'Stuff',
    },
  },
});

Stuff.attachSchema(StuffSchema);
