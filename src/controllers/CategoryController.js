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
      const category = await Category.create(req.body);

      category.message = 'Moment created';

      return res.json(category);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new CategoryController();
