const recommendationSystem = require('./recommendationSystem');
const data = require('./data.json');

const userIndex = process.argv[2];
const movieIndex = process.argv[3];

if (!userIndex || !movieIndex) {
  console.log('Please provide a user index and a movie index as command line arguments.');
  process.exit(1);
}

const predictedRating = recommendationSystem.recommend(userIndex, movieIndex, data.matrix);

console.log(`The predicted rating for user ${userIndex} for movie ${movieIndex} is ${predictedRating}`);
