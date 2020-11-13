import mysql from 'mysql';
import databaseConfig from '../config/database';

class Category {
  create(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      category_title: data.title,
      category_cover: data.cover,
    };

    const query = 'INSERT INTO categories SET ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, columns, (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  getAll() {
    const db = mysql.createPool(databaseConfig);

    const query = 'SELECT * FROM categories ORDER BY category_title';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  getOne(categoryId) {
    const db = mysql.createPool(databaseConfig);

    const query = 'SELECT * FROM categories WHERE category_id = ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, categoryId, (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }
}

export default new Category();
