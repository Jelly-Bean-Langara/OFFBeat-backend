import * as yup from 'yup';
import Post from '../models/Post';

class ExampleController {
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      categoryId: yup.number().required(),
      userId: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Please check if you give all the mandatory information' });
    }

    try {
      const post = await Post.create(req.body);

      post.message = 'Post created';

      return res.json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new ExampleController();
