function weightedAverage(similaritiesAndRatings) {
  let sumSimilarities = 0;
  let sumWeightedRatings = 0;

  for (let i = 0; i < similaritiesAndRatings.length; i++) {
    sumSimilarities += similaritiesAndRatings[i][0];
    sumWeightedRatings += similaritiesAndRatings[i][0] * similaritiesAndRatings[i][1];
  }

  if (sumSimilarities === 0) {
    return 0;
  } else {
    return sumWeightedRatings / sumSimilarities;
  }
}

module.exports = weightedAverage;
