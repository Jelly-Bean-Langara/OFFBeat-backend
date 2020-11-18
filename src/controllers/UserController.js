import * as yup from 'yup';
import UserModel from '../models/UserModel';

const statusSuccess = "success";
const statusFailed = "failed";

class UserController {

  /* ---------- STORE ---------- */
  async store(request, response) {

  }

  /* ---------- INDEX ---------- */
  async index(request, response) {

  }

  /* ---------- SHOW ---------- */
  async show(request, response) {
    
    const schema = yup.object().shape({
      user_id: yup.string().required('user id required')
    })

    // validation
    try {
      await schema.validate(request.body);
    } catch (err) {
      return response.json({ status: statusFailed, error: { code: err.name, message: err.message } })
    }

    try {
      const data = await UserModel.getUser(request.body.user_id);
      response.json({ status: statusSuccess, data: data })
    } catch (err) {
      response.json({ status: statusFailed, error: { code: err.errno, message: err.code } })
    }
   }

  /* ---------- UPDATE ---------- */
  async update(request, response) { }

  /* ---------- DELETE ---------- */
  async delete(request, response) { }
}

export default new UserController();
