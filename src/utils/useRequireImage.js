export const requireImage = imageUrl => {
    try {
      return require(`../img/${imageUrl}`);
    } catch(err) {
      return require('../img/default.jpg');
    }
  };