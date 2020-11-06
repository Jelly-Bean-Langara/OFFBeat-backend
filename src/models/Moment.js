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
}

export default new Moment();
