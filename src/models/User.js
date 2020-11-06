import mysql from 'mysql';
import databaseConfig from '../config/database';

class User {
  create(data) {
    const db = mysql.createPool(databaseConfig);

    const columns = {
      user_name: data.name,
      user_middle_name: data.middleName,
      user_last_name: data.lastName,
      user_email: data.email,
      user_created_at: mysql.raw('NOW()'),
    };

    const query = 'INSERT INTO users SET ?';

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

export default new User();
