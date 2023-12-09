const cosineSimilarity = require('./cosineSimilarity');
const weightedAverage = require('./weightedAverage');

function recommend(userIndex, movieIndex, matrix) {
  // Create an array to store the cosine similarities and ratings
  let similaritiesAndRatings = [];

  // Calculate the cosine similarity between the user and every other user
  for (let i = 0; i < matrix.length; i++) {
    if (i !== userIndex && matrix[i][movieIndex] !== -1) {
      let similarity = cosineSimilarity(matrix[userIndex], matrix[i]);
      similaritiesAndRatings.push([similarity, matrix[i][movieIndex]]);
    }
  }

  // Calculate the weighted average of the ratings
  let predictedRating = weightedAverage(similaritiesAndRatings);

  // Round the result to one decimal place
  predictedRating = Math.round(predictedRating * 10) / 10;

  return predictedRating;
}

module.exports = {
  recommend
};
