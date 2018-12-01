import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');
export const Movie = new Mongo.Collection('Movie');

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
    type: String,
    max: 100,
    autoform: {
      group: 'Movie',
    },
  },
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
    type: String,
    max: 5,
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

Stuff.attachSchema(StuffSchema);
Movie.attachSchema(MovieSchema);
