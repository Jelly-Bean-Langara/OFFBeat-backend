import mysql from 'mysql';
import databaseConfig from '../config/database';

class ExampleModel {
  create(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {};

    const query = '';

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

export default new ExampleModel();
