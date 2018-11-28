import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

let imdb = require('imdb-api');

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { name: 'Basket', quantity: 3 },
  { name: 'Bicycle', quantity: 2 },
  imdb.get({ name: 'The Toxic Avenger' }, { apiKey: '500569ed', timeout: 30000 }),

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
