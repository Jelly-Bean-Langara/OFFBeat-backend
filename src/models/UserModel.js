import mysql from 'mysql';
import databaseConfig from '../config/database';

class UserModel {
  DestroyConnection(connection) {
    connection.release();
    connection.destroy();
  }

  /* ------- ------- -------- -------- createUser ---- ---------- -- ------------ --- --- */
  /* creates a user account */
  createUser(data) {
    const db = mysql.createPool(databaseConfig);
    const query = `INSERT INTO users SET ?`;

    const columns = {
      user_name: data.name,
      user_email: data.email,
      user_picture: data.picture,
      user_id: data.id,
      latest_refresh_token: data.refresh_token,
      user_created_at: mysql.raw('NOW()'),
    };

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, columns, (error, results) => {
          console.log('UserModel -> createUser -> results', results);
          this.DestroyConnection(connection);
          if (error) reject(error);

          resolve(results);
        });
      });
    });
  }

  /* ------- ------- --------  checkUserAccount --------- ---------- -- ------------ */
  /* check if user account exists */
  checkUserAccount(id) {
    const db = mysql.createPool(databaseConfig);
    const query = `SELECT EXISTS(SELECT * FROM users WHERE user_id=${id}) AS count`;

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, (error, results) => {
          this.DestroyConnection(connection);
          if (error) reject(error);
          resolve(results[0].count);
        });
      });
    });
  }

  /* ------- ------- --------  checkToken --------- ---------- -- ------------ */
  /* check if token (to corresponding user_id) exists */
  checkToken(user_id, token) {
    const db = mysql.createPool(databaseConfig);
    const query = `SELECT EXISTS(SELECT * FROM tokens WHERE token=${token}) AS count`;

    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, (error, results) => {
          this.DestroyConnection(connection);
          if (error) reject(error);
          console.log('rr => ', results);
          resolve(results);
        });
      });
    });
  }

  /* ------- ------- -------- --------------- saveToken --------- ---------- -- ------------ --- -------- ---- */
  /* save refresh token */
  saveToken(data) {
    const db = mysql.createPool(databaseConfig);
    const query = `INSERT INTO tokens SET ?`;

    const columns = {
      user_id: data.user_id,
      token: data.token,
      token_created_at: mysql.raw('NOW()'),
    };

    return new Promise((resolve, reject) => {

      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, columns, (error, results) => {
          this.DestroyConnection(connection);
          if (error) reject(error);
          resolve(results);
        });

      });

    });

  };


  /* ------- ------- -------- --------------- getUser --------- ---------- -- ------------ --- -------- ---- */
  /* get user details */
  getUser(user_id) {
    const db = mysql.createPool(databaseConfig);
    const query = `SELECT user_name, user_email, user_picture, user_created_at FROM users WHERE user_id=${user_id}`;

    return new Promise((resolve, reject) => {

      db.getConnection((err, connection) => {
        if (err) reject(err);

        connection.query(query, (error, results) => {
          this.DestroyConnection(connection);
          if (error) reject(error);
          resolve(results);
        });

      });

    });

  };



}

export default new UserModel();
