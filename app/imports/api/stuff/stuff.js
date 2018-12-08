import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');
export const Movie = new Mongo.Collection('Movie');
export const Drama = new Mongo.Collection('Drama');
export const Action = new Mongo.Collection('Action');
export const Horror = new Mongo.Collection('Horror');
export const Billing = new Mongo.Collection('Billing');

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
    label: 'Available',
    type: Number,
    autoform: {
      group: 'Stuff',
    },
  },
});

export const MovieSchema = new SimpleSchema({
  Title: {
    label: 'Title',
    type: String,
    max: 100,
    autoform: {
      group: 'Movie',
    },
  },
  Year: {
    label: 'Year',
    type: String,
    max: 4,
    autoform: {
      group: 'Movie',
    },
  },
  Rated: {
    label: 'Rated',
    type: String,
    max: 10,
    autoform: {
      group: 'Movie',
    },
  },
  Released: {
    label: 'Released',
    type: String,
    max: 20,
    autoform: {
      group: 'Movie',
    },
  },
  Runtime: {
    label: 'Length',
    type: String,
    max: 10,
    autoform: {
      group: 'Movie',
    },
  },
    Genre: {
      label: 'Genre',
      type: Array,
      max: 100,
      autoform: {
        group: 'Movie',
      },
    },
  'Genre.$': { type: String },
  Director: {
    label: 'Director',
    type: String,
    max: 100,
    autoform: {
      group: 'Movie',
    },
  },
  Writer: {
    label: 'Writers',
    type: String,
    max: 1000,
    autoform: {
      group: 'Movie',
    },
  },
  Actors: {
    label: 'Actors',
    type: String,
    max: 200,
    autoform: {
      group: 'Movie',
    },
  },
  Plot: {
    label: 'Plot',
    type: String,
    max: 2000,
    autoform: {
      group: 'Movie',
    },
  },
  Language: {
    label: 'Language',
    type: String,
    max: 500,
    autoform: {
      group: 'Movie',
    },
  },
  Poster: {
    label: 'Poster',
    type: String,
    max: 500,
    autoform: {
      group: 'Movie',
    },
  },
  HomePoster: {
    label: 'Preview Poster',
    type: String,
    max: 500,
    autoform: {
      group: 'Movie',
    },
  },
  imdbRating: {
    label: 'Rating',
    type: Number,
    decimal: true,
    autoform: {
      group: 'Movie',
    },
  },
  Quantity: {
    label: 'Available',
    type: Number,
    autoform: {
      group: 'Movie',
    },
  },
});

export const BillingSchema = new SimpleSchema({
  Name: {
    label: 'Name',
    type: String,
    max: 100,
    autoform: {
      group: 'Billing',
    },
  },
  Address: {
    label: 'Address',
    type: String,
    max: 250,
    autoform: {
      group: 'Billing',
    },
  },
  City: {
    label: 'City',
    type: String,
    max: 50,
    autoform: {
      group: 'Billing',
    },
  },
  Zip: {
    label: 'ZIP',
    type: String,
    max: 5,
    autoform: {
      group: 'Billing',
    },
  },
  Phone: {
    label: 'Phone Number',
    type: String,
    max: 10,
    autoform: {
      group: 'Billing',
    },
  },
  Card: {
    label: 'Card Number',
    type: String,
    max: 10,
    autoform: {
      group: 'Billing',
    },
  },
  CVV: {
    label: 'CVV',
    type: String,
    max: 3,
    autoform: {
      group: 'Billing',
    },
  },
  Exp: {
    label: 'Expiration Date',
    type: String,
    max: 5,
    autoform: {
      group: 'Billing',
    },
  },
});

Stuff.attachSchema(StuffSchema);
Movie.attachSchema(MovieSchema);
Drama.attachSchema(MovieSchema);
Action.attachSchema(MovieSchema);
Horror.attachSchema(MovieSchema);
Billing.attachSchema(BillingSchema);
