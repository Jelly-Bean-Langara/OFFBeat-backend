const connection = require('./connection');

/* defining a constructor */
const Categories = function(category_id, category_title, category_cover) {
}

const getAllQuery = 'SELECT * FROM categories'
Categories.getAll = (result) => {
  connection.query(getAllQuery, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      console.log(`result: ${res}`)
      result(null, res);
    }
  });
};

module.exports = Categories;