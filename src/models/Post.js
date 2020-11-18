import mysql from 'mysql';
import databaseConfig from '../config/database';

class Post {
  create(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      post_title: data.title,
      post_created_at: mysql.raw('NOW()'),
      category_id: data.categoryId,
      user_id: data.userId,
    };

    const query = 'INSERT INTO posts SET ?';

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

  changeVisibility(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      post_visibility: data.postVisibility,
    };

    const query = 'UPDATE posts SET ? WHERE post_id = ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, [columns, data.postId], (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  getByCategoryId(categoryId, quantity) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      category_id: categoryId,
    };

    const query = 'SELECT p.*, (SELECT COUNT(moment_id) FROM moments WHERE post_id = p.post_id) AS moments FROM posts AS p WHERE ? ORDER BY p.post_created_at DESC LIMIT 0,?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, [columns, parseInt(quantity)], (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  getById(postId) {
    const db = mysql.createPool(databaseConfig);

    const query = 'SELECT p.*, (SELECT COUNT(moment_id) FROM moments WHERE post_id = p.post_id) AS moments FROM posts AS p WHERE p.post_id = ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, postId, (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }
}

export default new Post();
