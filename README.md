# Movie Recommendation System

This project implements a simple movie recommendation system using collaborative filtering and cosine similarity. The goal of the recommendation system is to recommend movies to users based on the ratings given by other users who have similar taste in movies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js installed on your machine. The project has been tested on Node.js version 10.0.0 or later.

### Installing

Clone the repository to your local machine.

```
git clone https://github.com/yourusername/movie-recommendation-system.git
```

Navigate to the project directory.

```
cd movie-recommendation-system
```

Install the dependencies.

```
npm install
```

### Usage

The main function of the project is `recommend(userIndex, movieIndex, matrix)`, which predicts the rating that a user would give to a movie that they have not yet rated.

Here is an example of how to use the function:

```javascript
let matrix = [
  [3, 1, 2, -1],
  [1, -1, 3, 2],
  [2, 3, -1, 1],
  [1, 2, 3, -1]
];

console.log(recommend(0, 3, matrix));  // Output: 2.0
```

### Running the project

You can run the project with the following command:

```
npm start
```

## Built With

* [Node.js](https://nodejs.org/)

## Authors

* **Your Name**

## License

This project is licensed under the ISC License.
