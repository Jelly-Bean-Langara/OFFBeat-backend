import * as yup from 'yup';
import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      cover: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Please check if you give all the mandatory information' });
    }

    try {
      const result = await Category.create(req.body);

      result.message = 'Moment created';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async index(req, res) {
    try {
      const result = await Category.getAll();

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new CategoryController();
