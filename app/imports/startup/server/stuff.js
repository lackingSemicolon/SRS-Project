import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';


/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { Title: 'Wanted',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true' },
  { Title: 'The Bourne Ultimatum',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true' },
  { Title: 'Guardians of the Galaxy Vol. 2',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true' },
  { Title: 'National Treasure',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true' },
  { Title: 'Bad Boys',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true' },
  { Title: 'Bright',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
