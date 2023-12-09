function cosineSimilarity(user1, user2) {
  let dotProduct = 0;
  let magnitude1 = 0;
  let magnitude2 = 0;

  for (let i = 0; i < user1.length; i++) {
    if (user1[i] !== -1 && user2[i] !== -1) {
      dotProduct += user1[i] * user2[i];
      magnitude1 += Math.pow(user1[i], 2);
      magnitude2 += Math.pow(user2[i], 2);
    }
  }

  magnitude1 = Math.sqrt(magnitude1);
  magnitude2 = Math.sqrt(magnitude2);

  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;
  } else {
    return dotProduct / (magnitude1 * magnitude2);
  }
}

module.exports = cosineSimilarity;
