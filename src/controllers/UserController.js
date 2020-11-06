import * as yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      middleName: yup.string().notRequired(),
      lastName: yup.string().notRequired(),
      email: yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Please check if you give all the mandatory information' });
    }

    try {
      const user = await User.create(req.body);

      user.message = 'User created';

      return res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new UserController();
