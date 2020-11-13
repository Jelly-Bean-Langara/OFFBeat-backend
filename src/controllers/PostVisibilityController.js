import * as yup from 'yup';
import Post from '../models/Post';

class PostVisibilityController {
  async update(req, res) {
    const schema = yup.object().shape({
      postId: yup.number().required(),
      postVisibility: yup.bool().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Please check if you give all the mandatory information' });
    }

    try {
      const result = await Post.changeVisibility(req.body);
      result.message = 'Visibility changed';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new PostVisibilityController();
