import * as yup from 'yup';
import Post from '../models/Post';

class PostController {
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

  async index(req, res) {
    const { categoryId, quantity } = req.query;

    if (quantity === undefined) {
      return res.status(400).json({ error: 'you must inform how may posts you want' });
    }

    try {
      if (categoryId !== undefined && !isNaN(parseInt(categoryId))) {
        const result = await Post.getByCategoryId(categoryId, quantity);
        return res.json(result);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async show(req, res) {
    const { postId } = req.query;

    if (postId === undefined) {
      return res.status(400).json({ error: 'you must inform how may posts you want' });
    }

    try {
      const post = await Post.getById(postId);
      return res.json(post[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new PostController();
