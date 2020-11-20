import Post from '../models/Post';

class ExploreController {
  async index(req, res) {
    const { quantity } = req.query;

    if (!quantity) {
      return res.status(400).json({ error: 'You need to provide quantity' });
    }

    try {
      const result = await Post.getByQuantity(quantity);

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new ExploreController();
