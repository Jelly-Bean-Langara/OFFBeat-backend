import mysql from 'mysql';
import databaseConfig from '../config/database';

class Moment {
  create(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      moment_description: data.description,
      moment_date: data.date,
      moment_latitude: data.latitude,
      moment_longitude: data.longitude,
      moment_location_name: data.locationName,
      post_id: data.postId,
    };

    const query = 'INSERT INTO moments SET ?';

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

  getAllByPostId(postId) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      post_id: postId,
    };

    const query = 'SELECT * FROM moments WHERE ?';

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

  insertPhotos(momentId, filename) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      moment_id: momentId,
      moment_picture_file_name: filename,
    };

    const query = 'INSERT INTO moments_pictures SET ?';

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

  getPhotos(momentId) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      moment_id: momentId,
    };

    const query = 'SELECT moment_picture_file_name FROM moments_pictures WHERE ?';

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

  getOneById(momentId) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      moment_id: momentId,
    };

    const query = 'SELECT * FROM moments WHERE ?';

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

  getCover(postId) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      post_id: postId,
    };

    const query = 'SELECT m.moment_id, (SELECT moment_picture_file_name FROM moments_pictures WHERE moment_id = m.moment_id LIMIT 1) AS post_cover FROM moments AS m WHERE ?';

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

  updateMoment(momentId, data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      moment_date: data.date,
      moment_description: data.description,
      moment_latitude: data.latitude,
      moment_longitude: data.longitude,
      moment_location_name: data.locationName,
    };

    const query = 'UPDATE moments SET ? WHERE moment_id = ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, [columns, momentId], (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  deleteMoment(momentId) {
    const db = mysql.createPool(databaseConfig);

    const query = 'DELETE FROM moments WHERE moment_id = ?';

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, momentId, (error, results) => {
          connection.release();
          connection.destroy();

          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }
}

export default new Moment();
