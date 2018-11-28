import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';


/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { Title: 'Wanted',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX300.jpg' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
