const categories = require('../Models/categories-model');

exports.getAll = (req, res) => {
  categories.getAll( (err, data) => { // this (err, data) coming from model result callback function)
    const message = []
    res.setHeader('Content-Type', 'application/json');
    if (err) {
      message.push({
        status: "failed",
        error: {
          message: err.code || "something went wrong!",
          code: err.errno
        }
      })
      res.json(message);
    } else {
      message.push({
        status: "success",
        data: data
      })
      res.json(message);
    }
  })
}